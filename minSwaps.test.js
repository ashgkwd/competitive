const minSwaps = require("./minSwaps");

describe("Amazon Swap", () => {
  it("already sorted", () => {
    expect(minSwaps([1, 1, 1, 0, 0, 0])).toEqual(0);
    expect(minSwaps([1, 0, 0, 0])).toEqual(0);
    expect(minSwaps([0, 0, 0, 1, 1])).toEqual(0);
    expect(minSwaps([1, 0])).toEqual(0);
    expect(minSwaps([0])).toEqual(0);
    expect(minSwaps([1])).toEqual(0);
  });

  it("swap once", () => {
    expect(minSwaps([1, 0, 1])).toEqual(1);
    expect(minSwaps([0, 0, 1, 0])).toEqual(1);
    expect(minSwaps([0, 1, 0, 0, 0, 0, 0])).toEqual(1);
    expect(minSwaps([0, 1, 0])).toEqual(1);
    expect(minSwaps([1, 1, 1, 0, 1, 0, 0])).toEqual(1);
  });

  it("swap twice", () => {
    expect(minSwaps([0, 1, 1, 0, 0])).toEqual(2);
    expect(minSwaps([1, 0, 0, 1, 0])).toEqual(2);
    expect(minSwaps([1, 0, 1, 1, 0])).toEqual(2);
  });

  it("swap thrice", () => {
    expect(minSwaps([0, 1, 1, 1, 0])).toEqual(3);
    expect(minSwaps([1, 0, 1, 0, 1, 0])).toEqual(3);
  });
});
