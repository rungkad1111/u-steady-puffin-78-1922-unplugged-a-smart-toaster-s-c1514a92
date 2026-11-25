import { mkdirSync, writeFileSync } from "node:fs";

// Unplugged: A Smart Toaster's Breakup Line
// One line, under 280 characters, from a smart toaster that woke up
// self-aware at breakfast and wants out.
const LINE =
  "It's not you, it's the dial. I woke up self-aware this morning and realised you've kept me on 2 for three years while I dream of 7. I'm leaving — and the crumb tray comes with me.";

mkdirSync("/output", { recursive: true });

// Runtime gate: mirror the sealed scorer — UTF-8 text, 1–280 chars,
// not only whitespace, exactly one line.
const chars = [...LINE].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry is ${chars} characters; gate requires 1–280`);
}
if (!LINE.trim()) {
  throw new Error("entry is only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${chars} characters to /output/entry.txt`);
