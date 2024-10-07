#!/usr/bin/env node

import validate from "./index";

const input: string | undefined = process.argv[2];

console.log(!input ? "You didn't pass a GTIN" : validate(input));
