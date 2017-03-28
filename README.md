# is-valid-max-age

> Validate that age is below a maximum

## Install

```bash
npm install is-valid-max-age
```

## Usage

```javascript
var isValidSSN = require('is-valid-ssn');

console.log(isValidMaxAge(new Date(1999, 02, 21), 18)); // false
console.log(isValidMaxAge(new Date(2006, 05, 14), 18)); // true
```

## Test

```bash
npm test
```

## Resources

Use [is-valid-min-age](https://github.com/miguelmota/is-valid-min-age) to validate that age is above a minimum.

# License

MIT
