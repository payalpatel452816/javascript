/* MAP AND SET */
 // MAP => KEY - value

 //let data= new Map();
 let data = new Map([
    ['hello',100],
    ['payal',200],
    ['patel',300],
    ['how are ',400],
    ['you',500]
]);

// console.log(data)
// console.log(data.size)
// console.log("PAYAL",400)
// console.log(data.get('payal'))
// console.log(data.has('payal'))
// data.delete('payal')
// console.log( data.entries())


// let txt='';
// data.forEach((val,key)=>{
//     txt += key +'---->'+ val +'\n'
// });
// console.log(txt)


/*=========Set Mrethod======*/
 let data1= new Set([1,2,3,4,'payal'])
 console.log(data1)
 console.log(data1.size)
 console.log(data1.values)
 console.log(data1.entries)
 console.log(data1.has('payal'))