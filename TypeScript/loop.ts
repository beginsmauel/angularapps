
let department :string[] = [ "CSE","EEE","ECE"];

console.log("using for...of")
for(let dep of department)
  console.log( "name : " + dep)

console.log("using for...in")
for(let dep in department)
console.log(" Name :" + department[dep]);

let i = 0;
while(i < department.length){
  console.log(department[i]);
  i++;
}