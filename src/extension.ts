import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

const INCLUDE_RE = /{%\s*include\s*["']([^"']+)["']\s*%}/g;

function getIncludeRanges(doc: vscode.TextDocument) {
  const text = doc.getText();
  const ranges: { range: vscode.Range; target: vscode.Uri }[] = [];
  let m: RegExpExecArray | null;

  while ((m = INCLUDE_RE.exec(text))) {
    const full = m[0];
    const rel = m[1]; // caminho capturado
    // posição exata do caminho dentro do match
    const pathOffsetInMatch = full.indexOf(rel);
    const start = doc.positionAt(m.index + pathOffsetInMatch);
    const end = doc.positionAt(m.index + pathOffsetInMatch + rel.length);

    // resolve relativo ao arquivo atual
    const baseDir = path.dirname(doc.uri.fsPath);
    const abs = path.resolve(baseDir, rel);
    const target = vscode.Uri.file(abs);

    ranges.push({ range: new vscode.Range(start, end), target });
  }
  return ranges;
}

export function activate(ctx: vscode.ExtensionContext) {
  // DocumentLinkProvider — sublinha e abre com click
  const linkProvider: vscode.DocumentLinkProvider = {
    provideDocumentLinks(doc) {
      if (!["ymd", "pmd"].includes(doc.languageId)) return [];
      return getIncludeRanges(doc).map(({ range, target }) => {
        const link = new vscode.DocumentLink(range, target);
        link.tooltip = "Open included file";
        return link;
      });
    },
  };

  // DefinitionProvider — Cmd+Click / F12
  const defProvider: vscode.DefinitionProvider = {
    provideDefinition(doc, pos) {
      if (!["ymd", "pmd"].includes(doc.languageId)) return;
      const ranges = getIncludeRanges(doc);
      for (const { range, target } of ranges) {
        if (range.contains(pos)) {
          // só retorna definição se o arquivo existir
          try {
            if (fs.existsSync(target.fsPath)) {
              return new vscode.Location(target, new vscode.Position(0, 0));
            }
          } catch {}
        }
      }
      return;
    },
  };

  ctx.subscriptions.push(
    vscode.languages.registerDocumentLinkProvider(
      [{ language: "ymd" }, { language: "pmd" }],
      linkProvider
    ),
    vscode.languages.registerDefinitionProvider(
      [{ language: "ymd" }, { language: "pmd" }],
      defProvider
    )
  );

  // Comando auxiliar (opcional) para abrir o alvo sob o cursor
  const openCmd = vscode.commands.registerCommand("ymd.openInclude", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;
    const doc = editor.document;
    const pos = editor.selection.active;
    const hit = getIncludeRanges(doc).find(({ range }) => range.contains(pos));
    if (!hit) return;
    // cria arquivo se não existir? (opcional)
    if (!fs.existsSync(hit.target.fsPath)) {
      await fs.promises.mkdir(path.dirname(hit.target.fsPath), { recursive: true });
      await fs.promises.writeFile(hit.target.fsPath, "", "utf8");
    }
    const td = await vscode.workspace.openTextDocument(hit.target);
    await vscode.window.showTextDocument(td);
  });
  ctx.subscriptions.push(openCmd);
}

export function deactivate() {}