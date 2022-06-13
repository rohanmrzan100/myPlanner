codeStart.addEventListener('click',startTimer1);


//border of timer
function setBorder(){
    if(flag==0){
        start.style.border="5px solid white"; 
     
    }
    else{
        start.style.border="0px solid white"; 
      
    }
}

// to start the timer
function startTimer1(){
   
    codeStart.style.display='none';
    timertext.style.display='initial';
    timer_text.style.display='initial';
    myinterval=setInterval(timerCode,1000);
    setInterval(setBorder,1);
    
}   


//to run  the timer for coding
function timerCode(){
    sec++;
   if(sec>60){
       min++;
       sec=0;
   }
    timer_text.textContent=min+ " : "+sec;
  if(min>=20){
      check20sec();
  }

}



//to check time for break
function check20sec(){   
       
    counter++;
    clearInterval(myinterval);
    min=0;
    sec=0;
    timertext.style.display='none';
   if(counter<3){
    flag=1;
    timer_text.textContent="Take 20sec eye break.Look outside the window for 20 sec";
    audio.play();
    setTimeout(function (){
        timertext.style.display='initial'
        audio.pause();
        flag=0;
        audio.currentTime=0;
        myinterval=setInterval(timerCode,1000);
            },30000);
   }
   else{
    timer_text.textContent="Take 10 minutes  break.Drink water.Go to washroom.Intake fresh air.DONOT LOOK AT SCREENS";
    audio2.play();
    clearInterval(myinterval);
    flag=1;
    counter=0;
    setTimeout(function (){
        flag=0;
        timertext.style.display='initial'
        audio2.pause();
        audio2.currentTime=0;
        myinterval=setInterval(timerCode,1000);
            },600000);

   }
}



