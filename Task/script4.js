/* Write a program to check if a year is a leap year or not.*/
// let year = prompt('Enter a year:');
// {
//     function checkLeapYear(year) {
//         if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//             console.log(year + ' is a leap year');
//         } else {
//             console.log(year + ' is not a leap year');
//         }
//     }
// }
// checkLeapYear(year);

/*   Write a program to find the largest of three numbers. */

// let a=prompt("Enter the number")
// let b=prompt("Enter the number")
// let c=prompt("Enter the number")
// {
//     function larg(a,b,c){
//         if(a>b && a>c){
//             console.log("a")
//         }
//         else if(b>a && b>c){
//             console.log("b")
//         }
//         else{
//             console.log("c")
//         }
//     }
//     larg(a,b,c)
// }

/* Write a program to reverse a given string. */

// let string = prompt('Enter a string: ');
// {
    
// function reverseString(str) {

//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// let result = reverseString(string);
// console.log(result);
// }


/*  Write a program to check if a string is a palindrome. */


let string = prompt('Enter a string: ');
function checkPalindrome(string) {
  
  
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
  return 'It is a palindrome';
}
let len = string.length;

let value = checkPalindrome(string);
console.log(value);

/*   Write a program to find the sum of the first n natural numbers. */
//   let n=prompt('Enter a number')
// {
//     function sum(n){
//         let sum=0;
//         for(let i=0; i<n; i++){
//             sum+=i;
//         }
//         return sum;
//     }
// }
// let num =sum(n);
//  console.log(num);

/*  Write a simple guessing game where the user has to guess a number between 1 and 10.*/

// function guessNumber() {
//     let random = Math.floor(Math.random() * 10) + 1;

//     let number = parseInt(prompt('Guess a number from 1 to 10: '));

//     while(number !== random) {
//         number = parseInt(prompt('Guess a number from 1 to 10: '));
//     }

//     if(number == random) {
//         console.log('You guessed the correct number.');
//     }

//   }
// guessNumber();


/*  . Write a program to count the number of vowels and consonants in a given string  */
{

}



/*  1. Write a JS function that reverse a number. 
Example x = 15438;
Expected Output : 83451  */
// let x='15438'
// {
//     function reverseNumber(x){
//         let reverse=0;

//         while(x>0){
//             reverse= (reverse*10)+(x%10);
//             x=Math.floor(x/10)
//         }
//         return reverse
//         }
// }
// console.log('x')

/*  Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox'  */

// {
//    function uppercase(str){
//     let words= str.split('')
//     let newstr=[]
//     for(let i=0; i<words.length; i++){
//         if(i==0 ||words[i-1]==''){
//             newstr[i]=words[i].toUpperCase()
//         }
//         return newstr.join('')
//     }
//    }   
// }
// console.log(uppercase('the quick brown fox'))

/*  Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string. */

// {
//     function longestword(str){
//         let words=str.split('')
//         let longest='';
//         for(let i=0; i<words.length; i++){
//             if(words[i].length>longest.length){
//                 longest=words[i]
//             }
//         }
//         return longest;
//     }
// }
// console.log(longestword('Web Development Tutorial'))


/*  Write aWrite a JavaScript function that checks whether a number is perfect.. */

// function perfect(number) {
    
//     var temp = 0;
  
   
//     for (var i = 1; i <= number / 2; i++) {
      
//       if (number % i === 0) {
        
//         temp += i;
//       }
//     }
  
    
//     if (temp === number && temp !== 0) {
      
//       console.log("It is a perfect number.");
//     } else {
      
//       console.log("It is not a perfect number.");
//     }
//   }
  
//   perfect(28); 
  