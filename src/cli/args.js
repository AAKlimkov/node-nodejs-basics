const parseArgs = () => {
  let args = process.argv.slice(2);

if (args.length % 2 !== 0) {
  console.error("Error: Arguments should be in pairs of a property and its value.");
  process.exit(1);
}

for (let i = 0; i < args.length; i += 2) {
  let key = args[i].replace('--', '');
  let value = args[i + 1];

  if (!args[i].startsWith('--')) {
    console.error(`Error: The property '${args[i]}' should start with '--'.`);
    process.exit(1);
  }

  if (value === undefined || value.startsWith('--')) {
    console.error(`Error: Missing value for property '${key}'.`);
    process.exit(1);
  }

  console.log(`${key} is ${value}`);
}

};

parseArgs();