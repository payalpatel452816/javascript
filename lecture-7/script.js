/*===================JAVASCRIPT for..of LOOP==========*/
let arr=["html", "css" ,"js","React Js","SAAS","TailWind"]

console.log(arr[0]);
console.log(arr);
for(let items of arr){
    console.log(items);

    arr.forEach((items) => console.log('forEach', items))
        let num=[10,20,30,40]
          for(let multi of num){
            console.log(multi*2);
          }
    
          num.forEach((items) => console.log(items* 2))
          num.map((items) => console.log(items*3))
}



/*===================BASIC FUNCTIONS=========*/
{
    let func1= function greek(){
        console.log('helloo!');
    }
    console.log(func1);
    func1()
}
/*  ARROW FUNCTION */
{
     const func1 = ()  => console.log('hellooo!')
     console.log(func1())
}


/*FUNCTION RETUR KEYWORD*/

{
    function profile(){
        return{
            name:'payal'
        }
    }
    console.log(profile())

}

                        /*============FUNCTION WITH EVENT=========*/

//DOM EVENTS

// MouseEvent
// KeyboardEvent
// windowEvents



{
    function html(){
        document.getElementById('demo').innerHTML='hello World'
    }
}

