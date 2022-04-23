module.exports = (str) => {
  
  let lowerCaseNoSymbolsStr = str
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "");

  if (
    lowerCaseNoSymbolsStr
      .split("")
      .reverse()
      .join("") !== lowerCaseNoSymbolsStr
  ) {
    return [];
  }

  return [lowerCaseNoSymbolsStr];
};
