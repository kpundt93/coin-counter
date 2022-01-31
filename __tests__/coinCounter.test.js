import { coinCounter } from "../src/coinCounter";

describe('coinCounter', () => {
  test('it should test if input is a number value', () => {
    expect(coinCounter("hi")).toEqual("invalid input");
  });

  test('it should return amount of quarters required', () => {
    expect(coinCounter(0.75)).toEqual("3 quarters ");
  });

  test('it should return amount of dimes required', () => {
    expect(coinCounter(0.40)).toEqual("1 quarters 1 dimes 1 nickels");
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

})