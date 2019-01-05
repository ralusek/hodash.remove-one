### Remove first matching element from an array.

Will stop iterating when first match is encountered, and return new array without
the matched element.

`$ npm install hodash.removeOne`

```
const _removeOne = require('hodash.removeOne');
```

Remove by matching result of function:
```
const data = [{name: 'Phil'}, {name: 'Andrea'}, {name: 'Sam'}];

// Remove element with name = Sam
_removeOne(data, ({name}) => name === 'Sam');
```

Remove by strict equality check:
```
const letters = ['a', 'b', 'c', 'd', 'e'];

// Remove 'd'
_removeOne(letters, 'd');
```
