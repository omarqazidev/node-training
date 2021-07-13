module.exports.NodeCommandLineArguments = function NodeCommandLineArguments() {
  process.argv.forEach((argumentValue, argumentIndex) => {
    let stringToLog;

    argumentIndex === 0
      ? (stringToLog = `📍 NodeJS Location: ${argumentValue}`)
      : argumentIndex === 1
      ? (stringToLog = `📍 Script Location: ${argumentValue}`)
      : (stringToLog = `⚙️  Argument ${argumentIndex - 1}: ${argumentValue}`);

    console.log(stringToLog);
  });
};
