// Higher Order 
//FUNCTION AS OBJECTS


function  sumAll(){
    let total=0;
    for(let i=0; i<arguments.length; i++){
        total+=arguments[i]
        return total;
        //return Arrguments[0]
    }
}
console.log(sumAll(23,34,45,67,32,))


//Rest parameter

function Hello(...args){
          return args
};
console.log(Hello(32,45,23,65))

//Generator
function* test(){
    yield 1;
    yield 2;
    yield 3;
    yield  "PAYAL"
    return "PATEL"
}
let data = test();
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);


//this Keyword
let person = {
    firstName: "PAYAL",
    lastName:"PATEL",
    Age:27,
    Hobbies:["Writting","Singing","Reading"],
    test : function(){
        console.log(`Introduce of my self: ${this.firstName} ${this.lastName},my Age is ${this.Age},years old.and my Hobbies: ${this.Hobbies[0]}`);
    }
}

person.test();