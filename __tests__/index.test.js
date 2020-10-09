const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  it("return FizzBuzz on 15", () => {
    expect(fizzbuzz(15)).toStrictEqual("FizzBuzz");
  });
  it("return Fizz On 9", () => {
    expect(fizzbuzz(9)).toStrictEqual("Fizz");
  });
  it("return Buzz On 10", () => {
    expect(fizzbuzz(10)).toStrictEqual("Buzz");
  });
  it("return number", () => {
    expect(fizzbuzz(7)).toStrictEqual("7");
  });
});
