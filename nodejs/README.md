In JavaScript, there are **4 main types of for loops**:

## 1. **Traditional for loop**
The classic loop with initialization, condition, and increment:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

## 2. **for...in loop**
Iterates over the **enumerable properties** of an object (also works with array indices):

```javascript
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]); // a 1, b 2, c 3
}
```

## 3. **for...of loop**
Iterates over **iterable objects** like arrays, strings, Maps, Sets, etc.:

```javascript
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value); // 10, 20, 30
}
```

## 4. **forEach() method**
A method available on arrays (technically not a loop statement, but functions like one):

```javascript
const arr = [10, 20, 30];
arr.forEach((value, index) => {
  console.log(index, value); // 0 10, 1 20, 2 30
});
```

**Key differences:**
- Use **for...in** for object properties
- Use **for...of** for array values and iterables
- Use **traditional for** when you need index control
- Use **forEach** for cleaner array iteration (but you can't break out of it)