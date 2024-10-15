// export default function validate(gtin: string): boolean {
//   if (!gtin || typeof gtin !== "string") {
//     return false; // return false for null, undefined, or non-string values
//   }

//   const length = gtin.length;

//   // Validate GTIN length (must be 8, 12, 13, or 14)
//   if (![8, 12, 13, 14].includes(length)) {
//     return false;
//   }

//   // Convert the GTIN string to an array of digits
//   const digits = gtin.split("").map(Number);

//   // Check if any character in the string is not a digit
//   if (digits.some(isNaN)) {
//     return false;
//   }

//   // Remove the last digit, which is the check digit
//   const checkDigit = digits.pop() as number;

//   // Determine the appropriate weights (multipliers) based on GTIN length
//   const weightPattern = length === 8 || length === 12 ? [3, 1] : [1, 3];

//   // Calculate the weighted sum of the remaining digits
//   const weightedSum = digits
//     .reverse()
//     .reduce((sum, digit, index) => sum + digit * weightPattern[index % 2], 0);

//   // Calculate the check digit
//   const calculatedCheckDigit = (10 - (weightedSum % 10)) % 10;

//   // Return true if the check digit matches the calculated value
//   return checkDigit === calculatedCheckDigit;
// }


export default (g: string) => {
  if (!g || typeof g !== "string") {
    // Return false for null, undefined, or non-string values
    return false;
  }

  // Ensure all elements in the array are treated as numbers
  const arr = g.split("").map(Number);

  // Check if any character in the string is not a digit
  if (arr.some(isNaN)) {
    return false;
  }
  // Ensure all elements in the array are treated as numbers
  // const arr = _.map(Number);

  // Check the regular expression and ensure the last element is a valid number
  return (
    !!/(^\d{8}$|^\d{12,14}$)/.test(g) &&
    arr.pop() ===
      10 -
        (arr
          .reverse()
          .map((v, i) => v * (i % 2 === 0 ? 3 : 1))
          .reduce((a, b) => a + b, 0) % 10 || 10)
  );
};