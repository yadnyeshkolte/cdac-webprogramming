### About Nodejs
1. Nodejs is a JS platform for developing out of browser JS applications. With this, we can perform server side coding which was not available in the traditional JS. 
2. Developed by Ryan Dahl for Joyent Technologies, the platform helps in developing the JS code without browser support. 
3. Once the installation is complete, U can use the Node terminal from any location in the Cmd. Make sure that it has set the path environment variable. 
4. Once the terminal is opened, U can perform or call any JS functions other than UI functions in the terminal. To exit the terminal, use Ctrl+C. 

### Features of Nodejs
1. It is a single threaded environment that performs all the operations Asynchronously.
2. Async functions are handled using Threadpool of the JS engine. 
3. It internally maintains a thread loop where operations are piped into the loop and each operation executes asynchronously. 
4. There shall be no blocking thread in Nodejs. So no UI based Functions that blocks the Application are allowed in Nodejs

Here's a list of **Node.js built-in modules** with async functions:

## **fs (File System)**
- `fs.readFile()` / `fs.promises.readFile()`
- `fs.writeFile()` / `fs.promises.writeFile()`
- `fs.appendFile()` / `fs.promises.appendFile()`
- `fs.readdir()` / `fs.promises.readdir()`
- `fs.mkdir()` / `fs.promises.mkdir()`
- `fs.rmdir()` / `fs.promises.rmdir()`
- `fs.unlink()` / `fs.promises.unlink()`
- `fs.rename()` / `fs.promises.rename()`
- `fs.stat()` / `fs.promises.stat()`
- `fs.access()` / `fs.promises.access()`
- `fs.copyFile()` / `fs.promises.copyFile()`
- `fs.open()` / `fs.promises.open()`

## **dns (Domain Name System)**
- `dns.lookup()`
- `dns.resolve()`, `dns.resolve4()`, `dns.resolve6()`
- `dns.reverse()`
- `dns.promises.lookup()`, `dns.promises.resolve()`, etc.

## **crypto (Cryptography)**
- `crypto.randomBytes()`
- `crypto.pbkdf2()`
- `crypto.scrypt()`
- `crypto.generateKeyPair()`

## **child_process (Child Processes)**
- `child_process.exec()`
- `child_process.execFile()`
- `child_process.spawn()` (returns streams - async)
- `child_process.fork()`

## **http/https (HTTP/HTTPS)**
- `http.request()`
- `http.get()`
- `https.request()`
- `https.get()`

## **net (Networking)**
- `net.createServer()` (connection events)
- `net.createConnection()`
- `socket.connect()`

## **timers (Timers)**
- `setTimeout()`
- `setInterval()`
- `setImmediate()`
- `timers/promises` module: `setTimeout()`, `setInterval()`, `setImmediate()` (Promise-based)

## **stream (Streams)**
- `stream.pipeline()`
- `stream.finished()`
- All readable/writable stream operations

## **zlib (Compression)**
- `zlib.gzip()` / `zlib.promises.gzip()`
- `zlib.gunzip()` / `zlib.promises.gunzip()`
- `zlib.deflate()`, `zlib.inflate()`, etc.

## **readline (Read Line)**
- `readline.createInterface()` (line-by-line reading with events)

## **worker_threads (Worker Threads)**
- `Worker` class (message passing)
- `worker.postMessage()`

## **dgram (UDP/Datagram)**
- `socket.send()`
- `socket.bind()`

**Note**: Most modules have both **callback-based** versions and **Promise-based** versions (under `moduleName.promises` or using `util.promisify()`).

In JavaScript, there are **4 main types of for loops**:

### 1. **Traditional for loop**
The classic loop with initialization, condition, and increment:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
```

### 2. **for...in loop**
Iterates over the **enumerable properties** of an object (also works with array indices):

```javascript
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]); // a 1, b 2, c 3
}
```

### 3. **for...of loop**
Iterates over **iterable objects** like arrays, strings, Maps, Sets, etc.:

```javascript
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value); // 10, 20, 30
}
```

### 4. **forEach() method**
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
