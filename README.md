# valid-gtin

[![npm version](https://badge.fury.io/js/valid-gtin.svg)](https://badge.fury.io/js/valid-gtin)
![Build Status](https://circleci.com/gh/0xflotus/valid-gtin.svg?style=svg)
![valid-gtin](https://badgen.net/bundlephobia/minzip/valid-gtin@latest)
![code size in bytes](https://img.shields.io/github/languages/code-size/0xflotus/valid-gtin?branch=master&label=Code%20Size&logo=GitHub&logoColor=ffffff&labelColor=282828&style=flat)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=0xflotus_valid-gtin&metric=alert_status)](https://sonarcloud.io/dashboard?id=0xflotus_valid-gtin)
![dependents](https://badgen.net/npm/dependents/valid-gtin)
![Scc Count Badge](https://sloc.xyz/github/0xflotus/valid-gtin/)

A zero cost lightweight validator function in native javascript for GTINs

## Usage

```javascript
const validate = require("valid-gtin")

if (validate(GTIN)) {
  console.log(":)")
}
```

## CLI

`valid_gtin <gtin>`

## Development

To run the tests please checkout this repository and run:

`npm run test`


## Stargazers over time

[![Stargazers over time](https://starchart.cc/0xflotus/valid-gtin.svg)](https://starchart.cc/0xflotus/valid-gtin)
