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
