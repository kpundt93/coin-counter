export function coinCounter(amount) {
  if (isNaN(amount)) {
    return "invalid input";
  }
  if (amount <= 0.00) {
    return "";
  }
  if (amount >= 0.25) {
    return (Math.floor(amount / 0.25) + " quarters ").concat(coinCounter((amount % .25).toFixed(2)));
  }
  if (amount >= 0.10) {
    return (Math.floor(amount / 0.10) + " dimes ").concat(coinCounter(amount % .10));
  }
  if (amount >= 0.05) {
    return (Math.floor(amount / 0.05) + " nickels ").concat(coinCounter(amount % .05));
  }
  if (amount >= 0.01) {
    return (Math.floor(amount / 0.01) + " pennies");
  }
}
