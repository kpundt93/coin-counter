export function coinCounter(amount) {
  if (isNaN(amount)) {
    return "invalid input";
  }
  if (amount <= 0.00) {
    return "";
  }
  if (amount >= 0.25) {
    return (Math.floor(amount / 0.25) + " quarters");
  }
  // if (amount === 0.1) {
  //   return "1 dime";
  // }
  // if (amount === 0.05) {
  //   return "1 nickle";
  // }
  return Math.round((amount * 100)) + " pennies";
}
