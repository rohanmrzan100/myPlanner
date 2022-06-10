
//for displaying time
let currentTime=document.getElementById('current-time');
let time=new Date();
    let current_hr=time.getHours();
    let current_min=time.getMinutes();
    let current_sec=time.getSeconds();
    currentTime.textContent=current_hr+" : "+current_min+" : "+current_sec;
function gettime(){
    let time=new Date();
    let current_hr=time.getHours();
    let current_min=time.getMinutes();
    let current_sec=time.getSeconds();
    currentTime.textContent=current_hr+" : "+current_min+" : "+current_sec;
}
setInterval(gettime,1000);

//for starting study

let study_btn=document.getElementById('study-btn');
let start=document.querySelector('.start');
let timer_text=document.querySelector('.text');
let timertext=document.querySelector('.timertext');
let flag=0;
let sec=0;
let min=0;
let count=0;
let audio=document.querySelector('.audio');
let audio2=document.querySelector('.audio2');
let counter=0;

// function to call after every 20 mins
function check20sec(){        
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
            myinterval=setInterval(timer,1000);
                },20000);
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
         
            myinterval=setInterval(timer,1000);
                },600000);

       }
    }

function timer(){

   
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
let myinterval=undefined;
function startTimer(){
    
     study_btn.style.display='none';
     timertext.style.display='initial';
     timer_text.style.display='initial';
    
     myinterval=setInterval(timer,1000);

    
}   

study_btn.addEventListener('click',startTimer)





