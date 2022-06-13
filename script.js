
//for displaying time
let currentTime=document.getElementById('current-time');
let time=new Date();
    let current_hr=time.getHours();
    var current_min=time.getMinutes();
    var current_sec=time.getSeconds();
    currentTime.textContent=current_hr+" : "+current_min+" : "+current_sec;
function gettime(){
    let time=new Date();
    let current_hr=time.getHours();
    let current_min=time.getMinutes();
    let current_sec=time.getSeconds();
    currentTime.textContent=current_hr+" : "+current_min+" : "+current_sec;
}
setInterval(gettime,1000);

//variable declarations

let codeStart=document.querySelector('.code-start');

let start=document.querySelector('.start');
let timer_text=document.querySelector('.text');
let timertext=document.querySelector('.timertext');
let allContent=document.querySelector('.study-btn');
let audio=document.querySelector('.audio');
let audio2=document.querySelector('.audio2');
let wholeDayBtn=document.querySelector('.btn1');
let randomBtn=document.querySelector('.btn2');



let flag=0;

let sec=0;
let min=0;

let counter=0;
let myinterval=undefined;



