# Changelog
All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.3.0] - 2025-09-14
### Added
- **Include navigation**:
  - Cmd+Click (macOS) / Ctrl+Click (Windows/Linux) or F12 on `{% include "path/file.pmd" %}` now opens the referenced file.
  - Also works with `.ymd` and `.pmd` files.
  - Relative paths are resolved against the current document’s folder.
- **Optional command** `ymd.openInclude` to open the include under the cursor, even if the file does not exist (creates it automatically).

### Improved
- Extension code refactored to use `esbuild` build pipeline (`npm run build`, `npm run watch`).

## [0.2.3] - 2025-09-14
### Fixed
- Comments in `.ymd` now correctly use Jinja style (`{# … #}`) instead of Markdown (`<!-- … -->`).
- Jinja highlighting now works properly inside Markdown blocks (`key: |`).

### Improved
- More robust block `|` termination rules, preventing loss of highlighting after fenced code blocks or Markdown headers.

## [0.2.0] - 2025-09-13
### Added
- **New `.pmd` language** (*Prompt Markdown + Jinja2*).
  - Dedicated grammar (`source.pmd`).
  - Snippets and custom file icon.
- **Jinja grammar (`source.jinja`)** split out and injected into both `.ymd` and `.pmd`.

## [0.1.0] - 2025-09-13
### Added
- **Jinja2 support** in `.ymd`:
  - Variables `{{ var }}`, blocks `{% … %}`, comments `{# … #}`.
  - Mixed highlighting for YAML + Markdown + Jinja.

### Fixed
- Markdown headings and lists inside `key: |` now render correctly.

## [0.0.1] - 2025-09-13
### Added
- Initial release.
- **YMD** (`.ymd`, `.yamd`) with YAML + Markdown embedded in `key: |`.
- Basic prompt snippets.
- Custom file icon theme.