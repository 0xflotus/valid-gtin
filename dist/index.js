"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (g, _ = [...g]) => {
    // Ensure all elements in the array are treated as numbers
    const arr = _.map(Number);
    // Check the regular expression and ensure the last element is a valid number
    return (!!/(^\d{8}$|^\d{12,14}$)/.test(g) &&
        arr.pop() ===
            10 -
                (arr
                    .reverse()
                    .map((v, i) => v * (i % 2 === 0 ? 3 : 1))
                    .reduce((a, b) => a + b, 0) % 10 || 10));
};
