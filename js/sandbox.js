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

let sum = numberOne + numberTwo ;

if (sum === MainNumber || numberOne === MainNumber || numberTwo === MainNumber){
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
  let message = FahrenheitTemp+'°F is equal to' + FahrenheitToCelsius + '°C.';
    console.log(message);
} 

fahrenheitToCelsius(15);


// Task 8

// eg .1
function timeConvert(n) {
    var num = 71;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvert(200));

    // eg.2
function timeConverter(n) {
    var number = 133;
    var hours = (number / 60);
    var remainhours = Math.floor(hours);
    var minutes = (hours - remainhours) * 60;
    var remainingminutes = Math.round(minutes);
    return number + " minutes = " + remainhours + " hour(s) and " + remainingminutes + " minute(s).";
    }
    
    console.log(timeConverter(200));

    // Task 10
let multiples = function (n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        }
    }
    document.write(sum);
};


multiples(1000);

console.log(sum);