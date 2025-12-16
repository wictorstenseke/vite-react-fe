import { build } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "..");

// Generate route tree by running vite build
// The TanStack Router plugin generates routeTree.gen.ts during the build process
// We use minimal build options to speed it up
await build({
  root,
  build: {
    minify: false,
    emptyOutDir: false,
  },
  logLevel: "warn",
});
