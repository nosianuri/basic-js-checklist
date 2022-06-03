// 1. write 3 variables (number, string, boolean)
//  var num1 = 3;
// var num2 = 4;
// var num3 = 7;

// console.log(num1, num2, num3);
// console.log(num1 + num2 + num3);

// var stringNum1 = 'nosia';
// var stringNum2 = 'nuri';
// var stringNum3 = 'akter';
// console.log(stringNum1, stringNum2, stringNum3);

// var boolean1 = true;
// var boolean2 = false;
// console.log(boolean1, boolean2);
 

// 2. 2 variables using (let, const)

// var numbers =[45, 65, 43, 63, 75, 23, 25];
// var index = numbers.indexOf(152);
// console.log(index);
// numbers[1] = 59;
// console.log(numbers);
// numbers.unshift(89);
// console.log(numbers);

// let usingVar = [num1, num2];
// num1 = 45;
// num2 = 53
// addNum = num1 + num2;

// console.log(addNum);

  

/* const num1 = (45, 57);
num1 = (45, 2);

console.log(num1);
 */


// 3. simple Math Operation() +, -, *, /, %

// var tablePrice = 37;
// var chairPrice = 25;
// var totalPrice = tablePrice + chairPrice;
// console.log(totalPrice);
// var priceDifference = tablePrice - chairPrice;
// console.log(priceDifference);
// var priceMultiplication = tablePrice * chairPrice;
// console.log(priceMultiplication);
// var priceDivided = tablePrice / chairPrice;
// console.log(priceDivided);
// var priceModulas = tablePrice % chairPrice;
// console.log(priceModulas);

// 4. comparision 

/* console.log(95 < 98);
console.log(98 > 100);
console.log(95 == 100);
console.log(95 != 100);
 */

// 5. two conditions. case-1: fulfill both conditions. case-2: fulfill at least one condition.

var dress = 500;
var watch = 400;
var total = dress + watch;
var budget = 1000;
// case 1:
// if (total < budget && total <= budget) {
//   console.log('aj shoping hobe', total);
// }
// Case 2:
// if (total < budget || total > budget) {
//   console.log('one item kinta parbo', total);
// }

// 6. if-else
// var isRaining = true;
// var noUmbrella = false;
// if(isRaining && noUmbrella){
//   console.log('bahira jabo');
// }
// else{
//   console.log('bahira jabo na');
// }

 

// 7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19

/*  var a;
a = 7;
while(a <= 19 ){
  if(a % 2 != 0){
    console.log(a);
  }
  a++;
} */

 

// 8. declare an array. number of elements. update or change 4th position element.add or remove elements. check whether a specific value exists in the array

/* var roolNumbers =[1, 3, 5, 7, 2, 6, 4];
var roolIndex = roolNumbers.indexOf(0);
console.log(roolIndex); 
roolNumbers[2] = 13;
console.log(roolNumbers);
roolNumbers.pop();
console.log(roolNumbers);
roolNumbers.push(10);
console.log(roolNumbers);
roolNumbers.unshift(15);
console.log(roolNumbers);
 */

// 9. use any for loop to display every elements of an array

// let elements = ['pen', 'bottle', 'box', 'laptop', 'mike'];
// for(let i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }

// 10. you have an array of numbers. display only the numbers bigger than 80




// 11. write a function that takes three numbers and returns the multiplication of the three numbers


// 12. declare an object and change any property of that object



//extra concatation
// var firstName = "Nosia";
// var secondName = "Nuri";
// var fullName = firstName + ' ' + secondName;
// console.log(fullName);






      // function bmiCalculator(weight, height) {
      //     var bmi = weight / Math.pow(height, 2);
      //     var interpretation = "";
      //     if (bmi < 18.5) {
      //     interpretation = "Your BMI is " + bmi + ", so you are underweight.";
      //     } else if(bmi < 24.9) {
      //     interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
      //     } else {
      //     interpretation = "Your BMI is " + bmi + ", so you are overweight.";
      //     }
      //     return interpretation;
      //     }
      //     (bmiCalculator(60, 2));



     


// function leapYear(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0)) {
//       return ("Leap year.");
//   } 
      
//   else if ((year % 4 === 0) && (year % 100 ===0) && (year % 400 ===0)){
//       return ("Leap year.");
//   }  
     
//    else{
//        return ("Not leap year.");
//    }

//   }



   
//   var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }
  
  
function fibonacciGenerator (n) {
  var output = [];
  if (n === 1){
    output = [0];
  }
  else if (n === 2) {
    output = [0, 1];
  }
  else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}

output = fibonacciGenerator(5);
console.log(output);




const colors = {mango: 'green', grapes: 'black', organe: 'yellow'};
console.log(colors[grapes])