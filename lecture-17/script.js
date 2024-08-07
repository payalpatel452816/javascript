//  OBJECT IN JAVASCRIPT
//   let data=  new Object();
//   console.log(typeof(data));



let data = {
     name:"payal",
     age: 27,
     address:"Valsad",
     country:"india",
     Grades: {
        maths:71,
        science:65,
        English:55,
     },
     hello :()=>('Hello Guys')
};
// console.log(data);
// console.log(data.hello);
// console.log(data.country);
    
let a = "Grades"
  console.log(data[a]);



//add new filed
 data.new="howwww"
 console.log(data);

 //Delete 
  delete data.hello;
  console.log(data)



  /*       CLASS IN JAVASCRIPT  */
    class ExamForm{
        Submit(){
              alert( this.name +":HEY! Your Form Is Submitted")
        }
        cancel(){
            alert( this.name +": Hey! Your Form Is Cancelled")
        }
        fill(givenname){
            this.name = givenname
        }

    }

    let Payal= new ExamForm()
    Payal.fill("Payal")
    let Arti= new ExamForm()
    Arti.fill("Arti")

    Payal.Submit()
    Arti.Submit()
    Payal.cancel()