/**
 * Calculates the GTIN checksum digit using the standard GS1 algorithm.
 * The function expects a GTIN string (8, 12, 13 or 14 digits) and calculates
 * the checksum based on all digits except the last one.
 *
 * @param {string} gtin - The GTIN code as a numeric string.
 * @returns {number|null} The calculated checksum digit (0–9) or null if the input is invalid.
 *
 * @example
 * // GTIN-13 example
 * calculateChecksum("4006381333931")
 * // → 1
 *
 * @example
 * // Invalid input
 * calculateChecksum("ABC123")
 * // → null
 */
export const calculateChecksum = (gtin) => {
  if (!gtin || typeof gtin !== 'string') {
    return null;
  }

  if (!/(^\d{8}$|^\d{12,14}$)/.test(gtin)) {
    return null;
  }

  const arr = gtin.split('').map(Number);

  if (arr.some(isNaN)) {
    return null;
  }

  const sum = arr
    .slice(0, -1)
    .toReversed()
    .map((v, i) => v * (i % 2 === 0 ? 3 : 1))
    .reduce((a, b) => a + b, 0);

  const calculated = (10 - (sum % 10)) % 10;

  return calculated;
};

/**
 * Validates a GTIN by comparing its checksum digit with the calculated one.
 *
 * @param {string} g - The GTIN code as a numeric string (8, 12, 13 or 14 digits).
 * @returns {boolean} Returns true if the GTIN has a valid checksum, otherwise false.
 *
 * @example
 * // Valid GTIN-13
 * validate("4006381333931")
 * // → true
 *
 * @example
 * // Invalid checksum
 * validate("4006381333932")
 * // → false
 *
 * @example
 * // Invalid input
 * validate("123ABC")
 * // → false
 */
export const validate = (g) => {
  if (!g || typeof g !== 'string') {
    return false;
  }

  if (!/(^\d{8}$|^\d{12,14}$)/.test(g)) {
    return false;
  }

  const result = calculateChecksum(g);

  if (result === null) {
    return false;
  }

  return result === Number(g.slice(-1));
};
