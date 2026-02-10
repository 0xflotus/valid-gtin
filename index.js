export const validate = (g) => {
  if (!g || typeof g !== "string") {
    return false;
  }

  const arr = g.split("").map(Number);

  if (arr.some(isNaN)) {
    return false;
  }

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
