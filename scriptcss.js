
let btn=document.querySelector('#study-btn');


    btn.addEventListener('click',function (){
        setInterval(setBorder,1);
    });
 

    function setBorder(){
        if(flag==0){
            start.style.border="5px solid white";      
             
        }
        else{
            start.style.border="0px solid white";         
        }
    }
                
    



