//import { getPrimeNumbers } from "../src/components/GetPrimeNumbers";

const chai = require("chai");
const expect = chai.expect;
const myFunctions = require("../src/components/GetPrimeNumbers");

describe("myFunctions getPrimeNumbers()", () => {
  beforeEach(() => {});
  it("should return the list of prime numbers between 2 and 10 which must be [2, 3, 5, 7]", () => {
    expect(myFunctions.getPrimeNumbers(10)).is.members([2, 3, 5, 7]);
  });
  it("should return the list of prime numbers between 2 and 13 which must be [2, 3, 5, 7,11,13] 13 inclusive", () => {
    expect(myFunctions.getPrimeNumbers(13)).is.members([2, 3, 5, 7, 11, 13]);
  });
});
