export const validate = g => {
  if (typeof g !== "string" || !/^\d{8}$|^\d{12,14}$/.test(g)) return false;

  const digits = [...g].map(Number);
  const check = digits.pop();
  const sum = digits.toReversed().reduce((s, d, i) => s + d * (i % 2 ? 1 : 3), 0);

  return check === (10 - (sum % 10) || 10);
};
