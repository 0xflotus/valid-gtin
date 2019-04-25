module.exports = (g, _ = [...g]) =>
  !/(^[0-9]{8}$|^[0-9]{12,14}$)/.test(g)
    ? false
    : _.pop() ==
      10 -
        (_.reverse()
          .map((v, i) => v * (i % 2 == 0 ? 3 : 1))
          .reduce((a, b) => a + b) %
          10);
