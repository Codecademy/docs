const { readdirSync } = require('node:fs');

let exitCode = 0;

const next = ['concepts', 'terms'];

function checkPath(path, i) {
  for (const entry of readdirSync(path)) {
    const entryDir = readdirSync(`${path}/${entry}`);
    if (!entryDir.includes(`${entry}.md`)) {
      console.error(`\n${path}/${entry} should contain a ${entry}.md file\n`);
      exitCode = 1;
    }
    if (i < 2 && entryDir.includes(next[i])) {
      checkPath(`${path}/${entry}/${next[i]}`, i + 1);
    }
  }
}

checkPath('content', 0);

process.exit(exitCode);
