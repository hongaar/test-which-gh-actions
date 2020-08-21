const which = require("which");

const command = process.argv[2];

console.log(`which("${command}")`);

async function test() {
  try {
    const path = await which(command);
    console.log(`"${command}" found in "${path}"`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

test();
