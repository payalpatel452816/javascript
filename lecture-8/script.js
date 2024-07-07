/*============  JAVACSCRIPT BREAK AND CONTINEWW STATEMENTS===========*/
   

/*Break statement*/
{
    let numbers=[1,2,3,4,4,5,6,7,8,9,10];
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]==5)
            break;
        console.log(numbers[i]);
    }
}

/*continew statement*/
{
    let numbers=[1,2,3,4,4,5,6,7,8,9,10];
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]==5)
            continue;
        console.log(numbers[i]);
    }
}

/*-------------NESTED BREAK AND CONTINEW STAEMENTS----------------*/

{
    for(let i=0;i<10;i++)
        {
            if(i==5)
                break;
            console.log('main loop');
        }
        for(let i=0;i<10;i++)
            {
                if(i==5)
                    continue;
                console.log('end loop');
            }
}


/*====================================CALLBACK FUNCTION=================*/


/* PARAMETRES IN FUNCTION*/

{
    function myfunction( a,b,Callback){
        Callback()
        return a+b
    }
    function Callback(){

        console.log('Hellooo Payal')
    }
    console.log(myfunction(5,10,Callback))
}
/*FUNCTION IN ARGUMENTS*/

{
    function sum(a,b)
    {
        function Callback(){
            console.log('hellooo payal')
        }
        Callback()
        return a+b
    }
    console.log(sum(45,28))
}


// {
//     function sum(a,b){
//         return(
//             function call(){
//                 console.log('helooo payal');
//             }
//         )
//     }
//     Callback()
//     a+b
//     console.log(sum(45,38))
// }


/*==========IIFE=========*/


// {
//     (function(){
//         console.log('hello World')
//     })()
// }


/*  Arrow Functions*/

const funct= ( ()  => console.log('hello world'))()

/*      Arguments  */
(function(name){
    console.log(name)
})('Hello Payal!')