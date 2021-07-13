const fs = require("fs");

module.exports.NodeReadFile = async function NodeReadFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data.toString());
    });
  });
};
