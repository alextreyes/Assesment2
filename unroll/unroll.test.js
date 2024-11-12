const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
});
describe("unroll function", () => {
  it("should return values in a spiral order for a 4x4 squareArray", () => {
    const squareArray = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    expect(unroll(squareArray)).toEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ]);
  });

  it("should return values in a spiral order for a 3x3 squareArray", () => {
    const smallerSquareArray = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];
    expect(unroll(smallerSquareArray)).toEqual([
      "a",
      "b",
      "c",
      "f",
      "i",
      "h",
      "g",
      "d",
      "e",
    ]);
  });

  it("should handle a 1x1 squareArray", () => {
    const singleElementSquareArray = [[1]];
    expect(unroll(singleElementSquareArray)).toEqual([1]);
  });

  it("should handle a 2x2 squareArray", () => {
    const twoByTwoSquareArray = [
      [1, 2],
      [3, 4],
    ];
    expect(unroll(twoByTwoSquareArray)).toEqual([1, 2, 4, 3]);
  });
});
