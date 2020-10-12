//import { isPrime } from "../src/components/GetPrimeNumbers";

const chai = require("chai");
const expect = chai.expect;
const myFunctions = require("../src/components/GetPrimeNumbers");

describe("myFunctions isPrime()", () => {
  it("should return true for a prime number", () => {
    expect(myFunctions.isPrime(19)).to.be.true;
  });

  it("should return false for an even number", () => {
    expect(myFunctions.isPrime(80)).to.be.false;
  });

  it("should return false for an odd number that has other factors ", () => {
    expect(myFunctions.isPrime(21)).to.be.false;
  });

  it("should return false for NaN", () => {
    expect(myFunctions.isPrime("gh")).to.be.false;
  });

  it("should return true for Strings that can be converted to a prime Number", () => {
    expect(myFunctions.isPrime("47")).to.be.true;
  });
  it("should return false for Strings that can be converted to a number but not prime Number", () => {
    expect(myFunctions.isPrime("45")).to.be.false;
  });
  it("should return false for numbers having decimals greater than 0", () => {
    expect(myFunctions.isPrime(23.6)).to.be.false;
  });
  it("should return false for numbers having decimals greater than 0", () => {
    expect(myFunctions.isPrime(23.08)).to.be.false;
  });
  it("should return false for numbers having decimals greater than 0", () => {
    expect(myFunctions.isPrime(23.99)).to.be.false;
  });
  it("should return true for numbers having decimals equal to 0", () => {
    expect(myFunctions.isPrime(23.0)).to.be.true;
  });
});
