module.exports = (g, _ = [...g]) =>
  !!/(^\d{8}$|^\d{12,14}$)/.test(g) &&
  _.pop() == 10 - ((_.reverse()
    .map((v, i) => v * (i % 2 == 0 ? 3 : 1))
    .reduce((a, b) => a + b) %
    10) || 0xA);
