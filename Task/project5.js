const  textarea= document.querySelector('#textarea');
const  button=document.querySelector('#count');
const output=document.querySelector('#output');


button.addEventListener('click',()=>{
    if(textarea.value ===''){
        output.textcount="PLEASE ENTER THE SOME TEXT";
    }
        else{
           const val= textarea.value;
           let count=0;
           for(let i=0; i<value.length;i++){
            if(val[i]==='a'|| val[i]==='e'|| val[i]==='i' || val[i]==='o'|| val[i]==='u'){
                         count++;
            }
           }
           output.innerHTML=`THE NUMBER OF VOWELS ARE ${count}`;
        }
});