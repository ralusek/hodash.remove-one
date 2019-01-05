'use strict';

const _removeOne = require('../src');

const people = [
  {name: 'Bill'},
  {name: 'Sally'},
  {name: 'Candace'}
];


people.forEach(({name}) => {
  console.log(`Without ${name}`, _removeOne(people, person => person.name === name));
});

const numbers = [1, 2, 3, 4, 5];

console.log('Without 3', _removeOne(numbers, 3));

