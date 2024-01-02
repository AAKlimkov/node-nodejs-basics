const parseEnv = () => {
  const filteredEnvVars = Object.entries(process.env)
  .filter(([key, _]) => key.startsWith('RSS_'));

if (filteredEnvVars.length === 0) {
  console.log("No 'RSS_' prefixed environment variables found.");
} else {
  filteredEnvVars.forEach(([key, value]) => {
    console.log(`${key}=${value}`);
  });
}

};

parseEnv();