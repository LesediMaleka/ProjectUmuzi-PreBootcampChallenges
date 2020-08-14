// Task 1
let x = 0;
let y = 1;

console.log(x);
console.log(y);

// Part 2

let X = x + 3;
let Y = y + X;

console.log(X,Y);

//Task 2
let Variablex = 1 + 1 * 2;
let Variabley = (1 + 1) * 2;
let Variablez = 1 + ( 1 * 2 );
let Variablea =  1 + 1 * 2 / 2;
let Variableb =  (1 + 1 * 2 ) /  2;

console.log(Variablex,Variabley,Variablez,Variablea,Variableb);

//Task 3
const MainNumber = 65;
let numberOne = 16;
let numberTwo = 49;

let Totalsum = numberOne + numberTwo ;

if (Totalsum === MainNumber || numberOne === MainNumber || numberTwo === MainNumber){
    console.log("true");
}else{
    console.log("false");
};

//Task 4
const FinalInput = 3;
let NumberThree = 53;
let NumberFour = 30;

let Mainsum = NumberThree + NumberFour ;

if (NumberThree === FinalInput && Mainsum === FinalInput ){
    console.log("true");
}else if (NumberFour === FinalInput && Mainsum === FinalInput ){
    console.log("true");
}else {
    console.log("false");
};

//Task 5

let base = 4;
let height = 4;

let area =1/2 * (base*height);
 console.log(area)

// Task 6
const NumberArray = [18,20,23,46,48,15]

NumberArray.sort()

NumberArray.sort((a,b) => a-b)

const max = NumberArray[NumberArray.length-1]
console.log(max);
// Task 7

// A
function CelsiusToFahrenheit(celsius) 
{
  let CelsiusTemp = celsius;
  let cToFahr = CelsiusTemp * 9 / 5 + 32;
  let message = CelsiusTemp+'°C is equal to ' + cToFahr + ' °F.';
    console.log(message);
}

CelsiusToFahrenheit(32);

// B
function fahrenheitToCelsius(fahrenheit) 
{
  let FahrenheitTemp = fahrenheit;
  let FahrenheitToCelsius = (FahrenheitTemp - 32) * 5 / 9;
  let message = FahrenheitTemp+'°F is equal to ' + FahrenheitToCelsius + ' °C.';
    console.log(message);
} 

fahrenheitToCelsius(23);


// Task 8

// eg .1
function timeConvert(n) {
    var num = 71;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + "  minute(s).";
    }
    
    console.log(timeConvert());



    // Task 9


    let multiples = function (n) {
        let Totalsum = 0;
        for (let i = 1; i < n; i++) {
            if ((i % 3 == 0) || (i % 5 == 0)) {
                Totalsum += i;
            }
        }
        document.write(Totalsum);
    };
    
    
    multiples(1000);
    
    // console.log(Totalsum);
      


// Task 10
let vowels = "aAeEoUiIuU";
let string = "HELLO challenge.Pre BOOTCAMP challenges";

let array = "";
for (i = 0; i < string.length; i++){
    if(vowels.indexOf(string[i]) >= 0) array += string[i];

}
console.log(array);

// Task 11
function CharactersCommon(string1, string2) {
    let string1ToArray = Array.from(string1);
    let string2ToArray = Array.from(string2);

let commonCharacters = string2ToArray.filter(value => {
    return string1ToArray.indexOf(value) != -1;
});

console.log(`Common characters are: ${commonCharacters}`);
}

CharactersCommon('house', 'computers');