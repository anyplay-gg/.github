// The rules every AnyPlay repository shares, checked over one checkout:
//
// - every relative link in a Markdown file points at a file or folder that exists;
// - no console title ID (four letters and five digits, such as those of PS4 and PS5 titles)
//   appears in code: a handler implements an API for every game, never a fix for one title.
//   Tests, test data, specifications and documentation may name titles.
//
// Usage: node rules.mjs <repository folder> [--no-title-ids]
//
// A launcher handles title IDs as data (links, its tests, invented games for screenshots) and keeps
// what it knows per title in data files, so it turns the second rule off.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative, resolve, extname, sep } from "node:path";

const root = resolve(process.argv[2] ?? ".");
const checkTitleIds = !process.argv.includes("--no-title-ids");
const skip = new Set([".git", "target", "node_modules", "dist", "build"]);
const problems = [];

function* files(folder) {
  for (const name of readdirSync(folder)) {
    if (skip.has(name)) continue;
    const path = join(folder, name);
    if (statSync(path).isDirectory()) yield* files(path);
    else yield path;
  }
}

const code = new Set([".rs", ".cpp", ".hpp", ".h", ".c", ".mjs", ".js", ".ts", ".sh", ".ps1"]);
const titleId = /\b(?:PPSA|CUSA)\d{5}\b/;
const isTest = (path) =>
  path.split(sep).some((part) => ["tests", "test", "testdata", "fixtures", "benches"].includes(part)) ||
  /(_test|_tests|\.test)\.[a-z]+$/.test(path);

for (const path of files(root)) {
  const rel = relative(root, path);
  const ext = extname(path).toLowerCase();
  if (ext === ".md") {
    const text = readFileSync(path, "utf8");
    // Inline links and images: [text](target) and ![alt](target); code spans and blocks are left out.
    const prose = text.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
    for (const match of prose.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
      const target = match[1];
      if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith("#") || target.startsWith("//")) continue;
      const file = decodeURIComponent(target.split("#")[0].split("?")[0]);
      if (!file) continue;
      const resolved = file.startsWith("/") ? join(root, file) : join(dirname(path), file);
      if (!existsSync(resolved)) problems.push(`${rel}: link to ${target} leads nowhere`);
    }
  } else if (checkTitleIds && code.has(ext) && !isTest(rel)) {
    const lines = readFileSync(path, "utf8").split("\n");
    lines.forEach((line, i) => {
      if (titleId.test(line) && !line.includes("rules: title id allowed")) {
        problems.push(`${rel}:${i + 1}: a title ID in code (${line.match(titleId)[0]})`);
      }
    });
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  console.error(`\n${problems.length} problem(s). See https://github.com/anyplaynet/.github/blob/main/CONTRIBUTING.md`);
  process.exit(1);
}
console.log(checkTitleIds ? "rules: links resolve, no title IDs in code" : "rules: links resolve");
