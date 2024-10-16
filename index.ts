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
