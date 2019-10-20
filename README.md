[![npm version](https://badge.fury.io/js/valid-gtin.svg)](https://badge.fury.io/js/valid-gtin)
[![Build Status](https://travis-ci.org/0xflotus/valid-gtin.svg?branch=master)](https://travis-ci.org/0xflotus/valid-gtin)
![valid-gtin](https://badgen.net/bundlephobia/minzip/valid-gtin@latest)
![dependents](https://badgen.net/npm/dependents/valid-gtin)
![Scc Count Badge](https://sloc.xyz/github/0xflotus/valid-gtin/)

# valid-gtin
A zero cost lightweight validator function in native javascript for GTINs

# Usage
```javascript
const validate = require("valid-gtin")

if (validate(GTIN)) {
  console.log(":)")
}
```

# CLI
`valid_gtin <gtin>`

# Development

To run the tests please checkout this repository and run:

`npm run test`
