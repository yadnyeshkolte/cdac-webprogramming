//Typescript supports arrays. 
let skillSets : string[] =[]; //blank array of strings.
skillSets.push("TypeScript");//adding elements at the bottom of the array .
skillSets.push("CSharp");
skillSets.push("Python");
//New syntax using spread operator
skillSets = [...skillSets, "Java", "GoLang"]; //Java and GoLang added to the array. 
console.log("Skill Sets: ");
for(let skill of skillSets){
    console.log(skill);
}
console.log("After removing CSharp: ");
skillSets = skillSets.filter(skill => skill !== "CSharp");//removing CSharp from the array.
//No need to use Splice method. Splice needs Index of the element to remove.
for(let skill of skillSets){
    console.log(skill);
}

skillSets = skillSets.map(skill => skill.toUpperCase());//convert all skills to uppercase using map function.
console.log("After converting to Uppercase: ");
for(let skill of skillSets){
    console.log(skill);
}
