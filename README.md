[![npm version](https://badge.fury.io/js/valid-gtin.svg)](https://badge.fury.io/js/valid-gtin)
[![Build Status](https://img.shields.io/travis/0xflotus/valid-gtin?branch=master&label=Travis%20CI&logo=Travis%20CI&logoColor=ffffff&labelColor=282828)]()
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
