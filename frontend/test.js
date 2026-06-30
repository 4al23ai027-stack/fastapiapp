// console.log("Hello, World!");
// let x=10;
// console.log(x);
// const y=20;
// console.log(y);  
// console.log(x+y);
function add(x,y){
    return x+y;
}
console.log(add(10,20));
const arr = [10,20,30,40,50];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// dictionary
const dict = {"name":"John", "age":30, "city":"New York"};
console.log(dict.name);

// destructuring
let {name, age, city} = dict;
console.log(name);
console.log(age);
console.log(city);

// destructuring of array
const [a, b, c, d, e] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// rest and spread
// spread operator --> ..(variable name)
// function add(a, ...b){
//     return a+b;
// }
// console.log(add(10,20));
// console.log(add(10,20,30));
// console.log(add(10,20,30,40));

// Template literals
const num1=10;
const num2=20;
console.log(`The sum of ${num1} and ${num2} is ${num1+num2}`);
