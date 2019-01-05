### Remove first matching element from an array.

Will stop iterating when first match is encountered, and return new array without
the matched element.

`$ npm install hodash.removeOne`

```javascript
const _removeOne = require('hodash.remove-one');
```

Remove by matching result of function:
```javascript
const data = [{name: 'Phil'}, {name: 'Andrea'}, {name: 'Sam'}];

// Remove element with name = Sam
const withoutSam = _removeOne(data, ({name}) => name === 'Sam');
```

Remove by strict equality check:
```javascript
const letters = ['a', 'b', 'c', 'd', 'e'];

// Remove 'd'
const withoutE = _removeOne(letters, 'd');
```
