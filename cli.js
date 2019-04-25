#!/usr/bin/env node

const validate = require("./index");

console.log(
  !process.argv[2] ? "you didn't passed a GTIN" : validate(process.argv[2])
);
