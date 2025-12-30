//map function is used to transform each element inside a collection and return the transformed Collection. 
const names = ["banu", "murali", "joydip", "ramnath", "phaniraj"]//Array of names

// const capitalizedNames = [];
// for (const element of names) {
//     const capName = element.charAt(0).toUpperCase() + element.slice(1);
//     capitalizedNames.push(capName)
// }

const capitalizedNames = names.map(element => element.charAt(0).toUpperCase() + element.slice(1));

console.log(capitalizedNames);
