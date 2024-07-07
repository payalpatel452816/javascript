/*=======================JAVASCRIPT STRING METHODS==============*/

/*-----SRTING PROTOTYPES-----------*/

/*   JAVASCRIPT (STRING,TRIM())     */

/* trim()    trimEnd()   trimStart()   */

{
    let str="     Hello World    ";
            //  01234567890123456789


    console.log(str.trim());
    console.log(str.trimEnd());
    console.log(str.length)
    console.log(str.trimStart())
    console.log(str.length)

}

/*  JAVASCRIPT STRING CHARAT()/ CHARCODEAT() METHODS  */

/*CHARAT(index)
 CHARCODEAT(index)
 */

{
     let str="Hello, worls !";
            //   012345678901234
     console.log(str.charAt(1));
     console.log(str.charCodeAt(4));
}

/*  JAVASCRIPT STRING at()  Method  */
{
     let str="hello World!";
     let at=str.at(-5);
     console.log(at);
}

/*   JAVASCRIPT STRING  Include()  Method  */

/*  include(SerchStrings)
    include(SerchString,Position) */

    {
        let str="Hello World  !";
        let Include =str.includes('W');
        console.log(Include);
        let Include_positions= str.includes('W',6)
        console.log(Include_positions);
    }