// recursive solution: 
export function coinCounter(amount) {
  if (isNaN(amount)) {
    return "invalid input";
  }
  if (amount <= 0.00) {
    return "";
  }
  if (amount >= 0.25) {
    return (Math.floor(amount / 0.25) + " quarters ").concat(coinCounter(amount % .25));
  }
  if (amount >= 0.10) {
    return (Math.floor(amount / 0.10) + " dimes ").concat(coinCounter(amount % .10));
  }
  if (amount >= 0.05) {
    return (Math.floor(amount / 0.05) + " nickels ").concat(coinCounter(amount % .05));
  }
  return Math.round((amount * 100)) + " pennies";
}

// closure solution:
// function coinClosure(cost) {
//   return function (total) {
//     return cost * total;
//   }
// }

export const coinClosure = (coins) => {
  return function (totalCost) {
    return `${Math.floor(totalCost / coins)} with ${totalCost % coins} remaining`
  }
}

export const quarters = coinClosure(25);
export const dimes = coinClosure(10);
export const nickels = coinClosure(5);
export const pennies = coinClosure(1);