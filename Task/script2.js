//If .....Else Statement


/*Check Odd or Even */

// {
//     let number = prompt("Enter a number: ");
//     if(number % 2 == 0) {
//         console.log("The number is even.");
//     }
    
//     // if the number is odd
//     else {
//         console.log("The number is odd.");
//     }
// }


// /*Find the larger number*/
// {
//     let x=20;
//     if(x>100){
//         console.log("the  number is smaller");
//     }
//     else {
//         console.log("the number is larger");
//     }
// }

/*Find the grade for input marks*/
//    let per;
// {
//     let marks=prompt("Enter a per:");
//     if(per >=80 && per<=100)
//         console.log("Grade A");
//     else if(per >=60 && per <80 )
//         console.log("Grade B");
//     else if(per >=40 && per <60 )
//         console.log("Grade C");
//     else if(per >=35 && per<45 )
//             console.log("Grade D");
//     else if (per < 35 )
//         console.log("Fail");
//     else("plese Enter valid percentage")
// }

/* Arithmetic  operation on two num*/

{
    let num1=20;
    let num2=30;
    let sum=num1+num2;
    console.log(sum);
}

// /*  Sort Three Numbers*/
// {
//     let num1=20;
//     let num2=30;
//     let num3=10;
//     if(num1 < num2 && num1> num)
// }

/*===========================JAVASCRIPT LOGICAL OPERATORE=====================-*/

/* (-9*3)*/
{
    let x=-9;
    let y=3;
    let result=x*y;
    console.log(result);
}
/* "value is "+ 50" // output:"value is 50"*/

{
    let x=50;
    let y="value is"+50;
    console.log(y);
}

/*17 % 5 //Output: 2*/
{
    let x=17;
    let y=5;
    let result=x%y;
    console.log(result);
}
/* 5 % 17 //Output:5*/
{
    let x=5;
    let y=17;
    let result=x%y;
    console.log(result);
}
/* 5/10 //output: 0.5*/
{
    let x=5;
    let y=10;
    let result=x/y;
    console.log(result);
}
/* (4 == 4) true */
{
    let x=4;
    let y=4;
    let result=x==y;
    console.log(result);
}
/* (4! = 5) true */
{
    let x=4;
    let y=5;
    let result=x!=y;
    console.log(result);
}
/*   (7 <= 8) true */
{
    let x= 7;
    let y=8;
    let result=x<=y;
    console.log(result);
}

/*  code snippet  */

// var a = "skillQude -decode your Skill";
// var result= a.substring(12,20);
// console.log(result);


// console.log(NaN===NaN);

// var fruits=["apple","mango","watermelon","orange"];
// var even_fruits=fruits.filter((ele)=>ele.length%2 !==0);
// console.log(even_fruits);



// let a =[1,2,3,4,5];
// console.log(a.slice(2,4));


// var a='hello';
// var sum=0;
// for(var i=0; i<a.length; i++){
//     sum +=(a.charCodeAt(i)-'a'.charCodeAt(0));
// }
// console.log(sum);

// console.log(typeof(NaN));



// const example = ({a,b,c}) =>{
//     console.log(b*2,a*5,c*2);
// };
// example({a:0,b:1,c:2});


// let s= "00000001111111";
// let l=0,r=s.length -1,ans=-1;
// while(l<=r){
//     var mid = Math.floor((l*r)/2);
//     if(s[mid]=='1'){
//         ans=mid;
//         r=mid-1;
//     }
//     else 
//     l=mid + 1;
// }
// console.log(ans);


// const obj1={Name:"Hello",Age:16};
// const obj2={Name:"Hello",Age:16};

// console.log(obj1===obj2);



// const obj1= { first :20,second:30, first :50};
// const obj2 ={...obj1}
// obj1.third=50;
// console.log(obj1);
// console.log(obj2);


// function alpha(str){
//     var arr=str.split("");
//     res =arr.sort().join("");
//     return res;
// }
// console.log("payal patel");
// console.log(alpha("payal patel"));

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
//    console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


// let a =1;
// if(a !=null)
//     console.log(1);
// else
//   console.log(0)


