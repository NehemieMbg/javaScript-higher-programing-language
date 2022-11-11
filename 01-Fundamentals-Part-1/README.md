# Type conversion

To convert a string to a number
``` javascript
const inputYear = '1991';
Number(inputYear);

// then we can add "inputYear" with another number
console.log(Number(inputYear) + 18);
```
To convert a number to a string
```javascript
console.log(String(23));
```
## Type coercion
```javascript
console.log('I am ' + 23 ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
```

## 5 falsy values: 0, '', undefined, null, NaN

```javascript
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(''));
```
