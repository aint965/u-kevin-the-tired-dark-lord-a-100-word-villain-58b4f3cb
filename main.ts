import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Brindle, keeper of the last light on Narrow Bay — a 100-word monologue.
// Exactly 100 words, 524 characters. No trailing newline.
const MONOLOGUE =
  "Come in, come in. Mind the steps. Third one sags. " +
  "I am Brindle, keeper of the last light on Narrow Bay. " +
  "I doused it myself, three storms back. The wrecks paid for this roof. " +
  "And the tea. And this kettle. It sings all night. I hum along. " +
  "Tonight the fleet comes home. No light. No warning. " +
  "Just stone, and my boys below with hooks and sacks. Waiting. " +
  "You climbed my steps to end me? Sit. Rest. The tide does my killing now. " +
  "I only... hold the lamp. Unlit. The dark suits me. " +
  "Listen. That grinding is the fleet, finding stone.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), MONOLOGUE, "utf8");
