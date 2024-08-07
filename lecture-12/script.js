/*======FUNCTION =====*/

function add(){
    console.log("Hello")
}
add();   //FUNCTION CALL


/*========FUNCTION WITH PARAMETERS=========*/

function addNumbers(a,b){
    return a  + b;
}
function addNumbers(a,b){
    console.log("Total is:",a+b )
}
console.log (addNumbers("A",15));
let c= addNumbers(10,20,43)
console.log(c);

/*=====CONSTUCTOR===*/


let data =  new Function("a","b",'return (a*b)')
console.log(data(10,20));

/*========IIFE========*/

(function(){
    console.log("hello world")
})();

/*FUNCTION AS VARIABLES*/

let greet=function(){}
    greet();

 /*=== Arrow function===*/
 
 let helloo=(a,b,c)=> a*b*c;
 helloo();
    