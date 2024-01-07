const name = "vishal"
const repoCount = 50

console.log(name + repoCount + "value");
console.log(`Hello ji dijiye ga ${name} and my repo count is$ {repoCount}`);

const gameName = new String('vishal');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // substring negative value ko ignore karta hai 
console.log(newString);
const anotherString = gameName.slice(-6, 1)
console.log(anotherString);

const newStringOne = "   vishal   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vishal.com/jitesh20%2-kumar"

console.log(url.replsace('%20', '-'))

