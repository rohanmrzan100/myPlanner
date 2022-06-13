randomBtn.addEventListener('click',startTimer);
wholeDayBtn.addEventListener('click',startTimer1);

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
function startTimer(){
    allContent.style.display='none';
    timertext.style.display='initial';
    timer_text.style.display='initial';
    myinterval=setInterval(timerStudy,1000);
  
    setInterval(setBorder,1);
    
}   
// // to start the timer
function startTimer1(){
    allContent.style.display='none';
    timertext.style.display='initial';
    timer_text.style.display='initial';
    myInterval=setInterval(wholeDayFun,1000)
    setInterval(setBorder,1);
    
}   
//Whole day function
function wholeDayFun(){

    let rem_min;
    let rem_sec;
    setInterval(function (){
        let time=new Date();
        rem_min=time.getMinutes();
        
        rem_sec=time.getSeconds();
        timer_text.textContent=rem_min+ " : "+rem_sec;
    },100);

    if(min>=25){
        check25sec();
    }
    



}




// check timer for study
function timerStudy(){   
    sec++;
   if(sec>60){
       min++;
       sec=0;
   }
    timer_text.textContent=min+ " : "+sec;
  if(min>=25){
      check25sec();
  }
 
}


//to 25 check time for break
function check25sec(){   
    counter++;
    clearInterval(myinterval);
    min=0;
    sec=0;
    timertext.style.display='none'

   if(counter<3){
    timer_text.textContent="Take 20sec eye break.Look outside the window for 20 sec";
    audio.play();
    flag=1;
  
    setTimeout(function (){
        timertext.style.display='initial'
        flag=0;
      
        audio.pause();
        audio.currentTime=0;
        myinterval=setInterval(timerStudy,1000);
            },30000);
   }
   else{
    timer_text.textContent="Take 10 minutes  break.Drink water.Go to washroom.Intake fresh air.DONOT LOOK AT SCREENS";
    audio2.play();
    clearInterval(myinterval);
    counter=0;
    flag=1;
  
    setTimeout(function (){
        flag=0;
        timertext.style.display='initial'
        audio2.pause();
        audio2.currentTime=0;
     
        myinterval=setInterval(timerStudy,1000);
            },600000);

   }
}
