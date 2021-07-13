const https = require("https");

module.exports.apiCall = async function ApiCall(urlToCall) {
  return new Promise((resolve, reject) => {
    https
      .get(urlToCall, (respone) => {
        let data = "";
        respone.on("data", (chunk) => {
          data += chunk;
        });

        respone.on("end", () => {
          resolve(data);
        });
      })
      .on("error", () => {
        reject(error);
      });
  });
};
