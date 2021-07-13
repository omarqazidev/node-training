const { NodeReadFile } = require("./file-handler");
const { keyValueEqualityStringToObject } = require("./string-handler");
const path = require("path");
const appDir = path.dirname(require.main.filename);

module.exports.NodeEnvironmentVariables =
  async function NodeEnvironmentVariables(envVarToFetch) {
    return new Promise(async (resolve, reject) => {
      try {
        let data = await NodeReadFile(`${appDir}\\.env`);
        const envObject = keyValueEqualityStringToObject(data);
        resolve(envObject[envVarToFetch]);
      } catch (error) {
        reject(error);
      }
    });
  };
