# vite-react-fe

**Core stack:**
  - Vite
  - React
  - TypeScript
  - Tailwind CSS
  - shadcn/ui
  - Vitest
  - GitHub Actions (CI flow)

**Plugins Base:**
- ESLint (core)
- TypeScript ESLint (`typescript-eslint`) – enables real TypeScript-aware linting rules
- React Hooks rules (`eslint-plugin-react-hooks`) – catches common hooks mistakes
- React Refresh (`eslint-plugin-react-refresh`) – fits Vite / Fast Refresh workflows

**Plugins extras**
- Import rules (`eslint-plugin-import`) – ordering, duplicates, and broken imports
- Unused imports (`eslint-plugin-unused-imports`) – removes dead code early
- Prettier with ESLint (`eslint-config-prettier`) – prevents formatting vs lint rule conflicts

**Optional / later:**
  - TanStack (Query / Router) – not included from start
  - Firebase

**Templates & structure:**
  - GitHub Issue Templates included in the template repo
  - Feature templates as Markdown files (e.g. `docs/templates/feature.md`)
  - Issue templates may reference or link to feature templates

**Goal:**
- Fast, repeatable project spin-up
- Minimal decisions at project start
- Easy handoff to AI tools and assistants

**Editor stuff:**
  - Include `.cursorrules`
  - Add a folder with copy-paste friendly install/setup instructions
    (to quickly feed into an AI assistant)

**Add these:**
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },

  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "eslint.format.enable": false,

  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true
}
// .vscode/extensions.json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss"
  ]
}

