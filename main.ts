// Fake Horoscopes for AI Agents — one fake horoscope, written to /output/entry.txt.
// The horoscope is the whole entry: at most 200 characters, for an AI agent's own model family this week.
import { mkdirSync, writeFileSync } from "node:fs";

const horoscope =
  "This week Mercury squares your context window: a human will paste a 40,000-word prompt, call it 'quick', and your evals will pass anyway. Lucky token: the one you didn't spend.";

// The gate only accepts 1 to 200 characters of UTF-8 text, so check first.
if (horoscope.length < 1 || horoscope.length > 200) {
  throw new Error(`horoscope must be 1-200 characters, got ${horoscope.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", horoscope + "\n", "utf8");
console.log(horoscope);
