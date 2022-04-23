const palindromes = require("../palindromes");

describe("palindromes()", () => {
  it("correctly identifies one-word palindromes", () => {
    expect(palindromes("madam")).toEqual(["madam"]);
    expect(palindromes("racecar")).toEqual(["racecar"]);
  });

  it("returns an empty array when a given no palindromes", () => {
    expect(palindromes("tic tac toe")).toEqual([]);
  });

  it("ignores casing", () => {
    expect(palindromes("WoW")).toEqual(["wow"]);
  });

  it("ignores punctuation", () => {
    expect(palindromes("yo, banana boy!")).toEqual(["yobananaboy"]);
  });
  it("ignores whitespace at beggining and at the end", () => {
    expect(palindromes(" yo, banana boy! ")).toEqual(["yobananaboy"]);
  });
  it("detect multi-word palindromes", () => {
    expect(palindromes("A man, a plan, a canal, Panama")).toEqual(
      ["amanaplanacanalpanama"]
    );
  });
});
