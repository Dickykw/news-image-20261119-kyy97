import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const source: string = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error("entry.png missing next to main.ts");
}
const outDir: string =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
const target: string = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target} (${statSync(target).size} bytes)`);
