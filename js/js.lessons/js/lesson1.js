// // Array filters

// const values = [1, -1, 2, 3, -4];

// const filterd = values.filter(n => n >= 0); 
// console.log(filterd)

// // Array maps
// // Array maps in string


// const numericals = [1, -1, 2, 3, -4];

// const filtered = numericals.filter(n => n >= 0); 
// const item = filtered.map( n => '<li>' + n + '<li>');
// const Html = '<ul>'+ item.join('') + '<ul>'
// console.log(Html)

// // Array maps in object

// const integer = [1, -1, 2, 3, -4];


// const items = integer
// .filter( n => n >= 0)
// .map( n => ({value: n}))
// .filter( obj => obj.value > 1)
// .map(obj => obj.value)

// console.log(items)



// // Array reduce

// const numbers = [1, -1, 2, 3, -2];

// const sum = numbers.reduce((accumulator, currentValue) =>  accumulator + currentValue
// );

// console.log(sum)

// const person = {
//     name: 'Mosh',
//     walk() {},
//     talk() {}
// }

// person.name = ''
// const targetMember = 'name'

// console.log()


// function readNumber() {
//     let num;

//     do {
//         num = prompt("Enter a number please?", 0);
//     } while (!isFinite(num));

//     if (num === null || num === '') {
//         return null;
//     }

//     num = +num; // Convert to a number


//     return num;
// }

// alert(`Read: ${readNumber()}`);




// const button = document.querySelector("button");

// function greet() {
//   const name = prompt("What is your name?");
//   const greeting = document.querySelector("#greeting");
//   greeting.textContent = `Hello ${name}, nice to see you!`;
// }

// button.addEventListener("click", greet);


// alert(`come\btome`)


// const number1 = 5;
// const number2 = 10;
// alert(`Fiften is ${number1 + number2} and
//     not ${2 * number1 + number2}.`)




// let sign = prompt("What's your sign?");

// if (sign.toLowerCase() === "scorpio") {
//   alert("Wow! I'm a Scorpio too!");
// }
  

// mark = window.prompt()
// mark = prompt("Are you feeling lucky","sure")

// const aNumber = Number(window.prompt("Type a number", ""));

// const song = "Fight the Youth";
// const score = 9;
// const highestScore = 10;
// const solution = `I like the song ${song}. I gave it a score of ${
//   (score / highestScore ) * 100
// }%.`;

// alert(output);


// const myString = "123";
// const myNum = Number(myString);
// alert(typeof myNum);


// function warn(x) {
//     if (Number.isSafeInteger(x)) {
//       return 'Precision safe.';
//     }
//     return 'Precision may be lost!';
//   }
  
//   alert(warn(Math.pow(2, 53)));
  
  
//   alert(warn(Math.pow(2, 53) - 1));
  
//   const name = "W3Schools";
// let letter = name.at(-3);
// alert(letter)

// const text = 'Is Apple'
// let come = text.charAt(text.length-3)
// alert(come)


// let talk = "Hello World";
// let become = txt.replace("Hello", "Welcome");
// console.log(become)

// let txit = "Apple, Banana, Kiwi";
// let part = txit.slice(txit.length - 5);
// console.log(part)

// let word = "Hello world!";
// let result = word.repeat(4);
// alert(result)


// let cats = "I love cats. Cats are very easy to love. Cats are very popular."
// cats= cats.replaceAll("Cats","Dogs");

// alert(cats)

// alert(eval(new String("2 + 2")))


// const a = "9";
// const c = "6";
// if ( a < c) {
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }


// let str1 = "book";
// let str2 = "pens";

// function areEqualCaseInsensitive(str1, str2) {
//   return str1.toUpperCase() === str2.toUpperCase();
// }

// console.log(areEqualCaseInsensitive(str1, str2))

// let fruits;
// switch (fruits) {
//   case "Banana":
//     alert("Hello");
//     break;
//   case "Apple":
//     alert("Welcome");
//     break;
//   default:
//     alert("Fruit not recognized");
// }


//   alert(  undefined ||  null)

  
// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'The office is closed.' ); // it is the weekend
// }



// let userName = prompt("Who's there?", '');

// if (userName === 'Richard') {

//   let pass = prompt('Password?', '');

  

//   if (pass === 'Poprich') {
//     // alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     // alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   // alert( "I don't know you" );
// }



// // alert(false && true)



// const b = new Boolean(true);
// if (b) {
//   console.log("b is truthy"); // "b is truthy"
//  }

// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent === "Start machine") {
//     btn.textContent = "Stop machine";
//     txt.textContent = "The machine has started!";
//   } else {
//     btn.textContent = "start machine";
//     txt.textContent = "The machine is stopped.";
//   }
// }


// let shoppingDone = false;
// let childsAllowance;

// if (shoppingDone == true) {
//   alert(childsAllowance = 10);
// } else {
//   alert( childsAllowance= 5);
// }



// let cheese = false;

// if (cheese) {
//   console.log("Yay! Cheese available for making cheese on toast.");
// } else {
//   console.log("No cheese on toast for you today.");
// }

// let iceCreamVanOutside = "on fire";
// let houseStatus = "not  fire"

// if (iceCreamVanOutside && houseStatus === "on fire") {
//   console.log("You should leave the house quickly.");
// } else if (iceCreamVanOutside || houseStatus === "on fire") {
//   console.log("Think logically")
// }
// else {
//   console.log("Probably should just stay in then.");
// }

// const boo = 1;
// switch (boo) {
//   default:
//     console.log("default");
//   case 2:
//     console.log(2);
//     break; // it encounters this break so will not continue into 'default:'
  
//   // fall-through
  
//   case 1:
//     console.log("1");
// }

// const Animal = "Cow";
// switch (Animal) {
//   case "Cow":
//   case "Giraffe":
//   case "Dog":
//   case "Pig":
//     console.log("This animal is not extinct.");
//     break;
//   case "Dinosaur":
//   default:
//     console.log("This animal is extinct.");
// }


// const foo = 0;
// let output = "Output: ";
// switch (foo) {
//   case 0:
//     output += "So ";
//   case 1:
//     output += "What ";
//     output += "Is ";
//   case 2:
//     output += "Your ";
//   case 3:
//     output += "Name";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Please pick a number from 0 to 5!");
// }


// console.log(true && NaN)


// const greeting = (person) => {
//   const name = person ? person.name : "stranger";
//   return `Howdy, ${name}`;
// };

// console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
// console.log(greeting(null)); // "Howdy, stranger"

// // ternary operator

// const select = document.querySelector("select");
// const html = document.querySelector("html");
// document.body.style.padding = "10";

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.addEventListener("change", () =>
//   select.value === "white"
//     ? update("white", "grey")
//     : update("black", "green")
                        
// );


// console.log('(years["2"] !== years["02"]')

