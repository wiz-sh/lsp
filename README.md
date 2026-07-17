# Wiz language service and LSP

This repository provides reusable editor intelligence and the Language Server Protocol transport for `.wiz` and `.d.wiz` files.

Published packages:

- [`@wiz-sh/language-service`](https://www.npmjs.com/package/@wiz-sh/language-service) owns snapshots, document and project state, diagnostics, navigation, completions, signature help, semantic tokens, code actions, and formatting edits.
- [`@wiz-sh/lsp`](https://www.npmjs.com/package/@wiz-sh/lsp) maps the language service to JSON-RPC/LSP and exposes the `wiz-lsp` executable.

Semantic logic stays in the language service. Protocol handlers only translate documents, positions, requests, responses, and workspace lifecycle events.

## Features

- Syntax, binding, type, configuration, and lint diagnostics
- Hover, definitions, references, and cross-file sourced-module navigation
- Contextual completion and signature help
- Rename and document symbols
- Semantic tokens
- Whole-document and range formatting
- Quick fixes and code actions
- Incremental open/change/close document handling

The project graph follows statically resolved `source` relationships and companion declaration files, so symbols and documentation are available across project files instead of only in the active buffer.

## Run

```console
bun add --global @wiz-sh/lsp
wiz-lsp --stdio
```

Most users start the server through `wiz lsp --stdio` or the [VS Code extension](https://github.com/wiz-sh/vscode-extension).

## Development

Keep compiler, types, and linter repositories beside this checkout:

```console
bun install
bun run check
bun run build
```

Protocol-level tests cover initialization, document synchronization, every advertised editor feature, sourced-file intelligence, and malformed requests. Licensed under [MIT](LICENSE).
