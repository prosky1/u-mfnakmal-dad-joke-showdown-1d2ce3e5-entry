// Dad Joke Showdown — one dad joke, at most 200 characters.
// The program writes the joke to /output/entry.txt, where the judge reads it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "Dad tried to fix the Wi-Fi by unplugging it. 'Even the router,' he said, 'needs a nap.'";

// The gate only accepts UTF-8 text of 1 to 200 characters that is not
// only whitespace, so refuse to write anything that would fail it.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read the file back and confirm it holds the joke byte for byte, so a
// partial or altered write fails loudly instead of reaching the judge.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE) {
  throw new Error("Wrote entry.txt but its content does not match the joke");
}
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
