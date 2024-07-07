

/*============JAVASCRIPT METHODS==============*/

/*------STRING PROTOTYPES-------------*/

/*      JAVASCRIPT trim()     Method*/

{
    let a='PAYAL      ';
           12345678901
    let b='Hello PAYAL';
    let newv=a.trim();
    console.log(a.length);
    console.log(b.length);
    console.log(newv.length);
}

/*   JAVASCRIPT trimStart()     Method*/

{
    let str="        Soul";
    console.log(str);
     let part=str.trimStart();
     console.log(part);
}

/*   JAVASCRIPT trimEnd()     Method*/

{
    let str="Soul      ";
    console.log(str);
     let part=str.trimStart();
     console.log(part);
}


/*  JAVASCRIPT STRING CHARAT()/ CHARCODEAT() METHODS  */

/* CharAt() */
{
    let str="Hello I am Payal Patel";
    let str2="I belong Valsad";
      console.log(str);
      console.log(str2);
      console.log(str.charAt(0));
      console.log(str2.charAt(5));
}

/* charcodeAt()  */

{
    let str="Hello I am Payal Patel";
    let str2="I belong Valsad";
      console.log(str);
      console.log(str2);
      console.log(str.charCodeAt(0));
      console.log(str2.charCodeAt(5));
}



/*  JAVASCRIPT STRING at()  Method  */

{
    let str="helloo,How are you?";
    console.log(str);
    let At=str.at(-6);
    console.log(At);
    
}

/*   JAVASCRIPT STRING  Include()  Method  */

    /*  include(SerchStrings)  */

    {
        let a="Welcome to our Cafe";
        let check=a.includes('our');
        console.log(check);
    }


   /* include(SerchString,Position) */

   {
    let a="Welcome to our Cafe";
    let check=a.includes('our' , -11);//
    console.log(check);
}


/*JavaScript slice() Method */

{
    let A="How Are You ?";
      let b=A.slice(0,3)
      let c=A.slice(4,7)
      let d=A.slice(8,12)
      console.log(b);
      console.log(c);
      console.log(d);    
}


/*  JavaScript substring() Method  */

{
    let A="Hello World ";
    let b=A.substring(0,5);
    let c=A.substring(6,11)
    console.log(b);
    console.log(c);

}

/*  JavaScript concat() Method  */

{
    let a="Hello Payal";
    let b="How Are You ?";
    console.log(a.concat(b));
}

/*JavaScript String startsWith() / endWith()  Method  */
    
// JavaScript String startsWith()

{
    let text = "Hello world, welcome to the universe.";
    let result = text.startsWith("Hello");

    console.log(result)

    // The startsWith() method returns true if a string starts with a specified string.

    // Otherwise it returns false.

    // The startsWith() method is case sensitive.

    let text2 = "Hello world, welcome to the universe.";
    let result2 = text.startsWith("Hello", 1);
    console.log(result2)

}

// JavaScript String endsWith()

{
    let text = "Hello world";
    let result = text.endsWith("world");
    let result2 =  text.endsWith("World");
    console.log(result)
    console.log(result2)

}

/* JavaScript String indexOf() */

{
    let text = "Hello world, welcome to the universe.";
    let result = text.indexOf("welcome");
    console.log(result);
    let result2 = text.indexOf("Welcome");
    console.log(result2)
    let result3 = text.indexOf("e", 5);
    console.log(result3)
}

/* JavaScript padStart() Method */

{
    let text = " soul";
    text=text.padStart(8, "Mind ");
    console.log(text)
}

/* JavaScript padEnd() Method */

{
    let text = " soul";
    text=text.padEnd(8, "Mind ");
    console.log(text)
}

/* JavaScript String repeat() Method*/

{
    let text="Hello Payal "
    console.log(text.repeat(7,""))
}

/* JavaScript toUpperCase() */

{
    let text="hello payal"
    console.log(text.toLocaleUpperCase())
    console.log(text.toUpperCase())
}

/* JavaScript toLowerCase() */
{
    let text="HELLO PAYAL"
    console.log(text.toLocaleLowerCase())
    console.log(text.toLowerCase())
}

/*  JavaScript split() Method  */

{
    let text="Hello Payal ! How Are You ?"
    let result=text.split(" ")
    console.log(result)
}

/*  JavaScript Number valueOf( ) Method  */
{
    let text="1000"
    console.log(text.valueOf());
}