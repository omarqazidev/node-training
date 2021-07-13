module.exports.keyValueEqualityStringToObject =
  function keyValueEqualityStringToObject(data) {
    let keyValuePairs = data.split("\r\n").map((value) => value.split("="));
    const object = Object.fromEntries(keyValuePairs);
    return object;
  };
