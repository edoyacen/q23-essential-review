// This entry writes the answer for "One-Star Review of Something Essential" to the output
// directory as entry.txt, creating the directory first so a clean run always succeeds.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "1 star. Sleep: excellent at starting, terrible at staying, and the 3 AM director's cut was not requested.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
