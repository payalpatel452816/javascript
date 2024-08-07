/* ======ARRAY FUNCTIONS=========*/
/* Arrry is  similar data type in one variable.*/
//[size]

//let data=[];
//let data =new Array('hello','world','payal','patel')
 //let data=[10,20,30,40,50]
 //console.log(data)
 //console.log(data[3]);

//  data[4]=100;
//  console.log(data)


 /*properties */

 //length

 let data= [10,30,20,40,50,50,54,67,]
 console.log(data)

 console.log(Array.isArray(data))
 console.log(data.length)


/* PUSH : INSERT INTO LAST INDEX */
data.push(100)
console.log(data)

/*POP:REMOVE FROM LAST INDEX */
data.pop()
console.log(data)

/* UNSHIFT: INSERT FIRST INDEX */
data.unshift(200)
console.log(data)


/*SHIFT: REMOVE FIRST INDEX */
data.shift(200)
console.log(data)


/*splice:(start,removecount,...add)  */
data.splice(2,0,200,300,400)
console.log(data)

/* data sort(): char data sorting */
console.log(data.sort(a,b)=(b-a))
console.log(data,splice(2,4))