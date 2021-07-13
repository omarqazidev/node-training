const { NodeCommandLineArguments } = require("./cmdline-args-handler");
const { apiCall } = require("./api-handler");
const { NodeReadFile } = require("./file-handler");
const { keyValueEqualityStringToObject } = require("./string-handler");
const { NodeEnvironmentVariables } = require("./dootenv");

module.exports = {
  cmdLine: NodeCommandLineArguments,
  apiCall: apiCall,
  readFile: NodeReadFile,
  kvesToObj: keyValueEqualityStringToObject,
  envVariables: NodeEnvironmentVariables,
};
