import { coinCounter, coinClosure, quarters, dimes, nickels, pennies } from "../src/coinCounter";

describe('coinCounter', () => {
  test('it should test if input is a number value', () => {
    expect(coinCounter("hi")).toEqual("invalid input");
  });

  test('it should return amount of quarters required', () => {
    expect(coinCounter(0.75)).toEqual("3 quarters ");
  });

  test('it should return amount of dimes required', () => {
    expect(coinCounter(0.40)).toEqual("1 quarters 1 dimes 1 nickels 0 pennies");
  });

  test('it should return amount of nickels required', () => {
    expect(coinCounter(0.20)).toEqual("2 dimes ");
  });

  test('it should recognize 0.1 as 1 dime', () => {
    expect(coinCounter(0.1)).toEqual("1 dimes ");
  });

  test('it should recognize 0.05 as 1 nickle', () => {
    expect(coinCounter(0.05)).toEqual("1 nickels ");
  });

  test('it should recognize 0.01 as 1 penny', () => {
    expect(coinCounter(0.01)).toEqual("1 pennies");
  });
});

describe('coinClosure', () => {
  test('should return quarters', () => {
    expect(quarters(50)).toEqual("2 with 0 remaining");
  });
  test('should return dimes', () => {
    expect(dimes(50)).toEqual("5 with 0 remaining");
  });
  test('should return 2 quarters', () => {
    expect(nickels(16)).toEqual("3 with 1 remaining");
  });
  test('should return pennies', () => {
    expect(pennies(5)).toEqual("5 with 0 remaining");
  });
});