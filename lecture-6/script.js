/* JAVASCRIPT LOOP*/
   
/* INCREMENT DECREMENT */

{
    let x= 10
    console.log(x++)
}

{
    let x=10;
    console.log(--x)

}
/*==========================JAVASCRIPT LOOP TYPE=====================*/

/* FOR LOOP
 WHILE LOOP
 DO...WHILE LOOP
 FOR..OF LOOP
 FOR..IN LOOP
 FOR...LOOP */


 /*while loop*/

    // while(condition);
    // {
    //     statement;
    //     afterThouth;
    // }


    let Age= 0;
    while(Age<=18)
        {
            console.log("Now I Am Minor!  ${Age}")
            Age++;
        }


        /*do...while Loop*/
        /* do{
        statement;
        afterThouth;
        }while(condition);
        */

        {
            let Age= 0;
            do{
                console.log('Now I Am Minor! ${Age}')
                Age++;
            }while( Age== 1)
        }


        /* For Loop*/
        // {
        //     for(Inilization, condition, after)
        //         {
        //             statement;
        //         }
        // }

                 let i=0;
        {

            for(i; i<10; i++){
                console.log('javascript for loop');
            }
        }


        /*=========FOR In Loop========*/
        {
            let arr= []
            console.log(arr);
            arr[0]=10;
            console.log(arr);
            arr.shift();
            console.log(arr);
            arr.length=10;
            console.log(arr);
            arr[5]=10;
            console.log(arr);

            let arrays1=[]
            console.log(typeof arrays);
            let Arrays2=new Array();
            console.log(typeof Arrays);
              console.log(arrays1);
              console.log(Arrays2);
        }



        {
            let obj=[];
            console.log(obj);
            obj.key1="SkillQude"
            console.log(obj.key1);
            console.log(obj['key1']);
        }



        /*============PUSH and Unshift Value Add in Array============*/
        /* For in loop*/
        // for(variable in Object)
        //     Statment

        {

            let obj = {
                a:10,
                b:20,
                c:30,
                d:[
                    {

                    }
                ]
    
            }
            for(let [key, value] in obj){
                console.log('${key :${obj[value]}');
            }
        }