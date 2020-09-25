const numberEntry=document.querySelector(".numberEntry");
const checkButtton=document.querySelector(".check");
const notifications=document.querySelector(".notifications")
const generatedNumber=Math.round(Math.random()*10);
const wrong=document.querySelector(".wrong");
const scores=document.querySelector(".scores");
const endOfGame=document.querySelector(".endOfGame");
const againButton=document.querySelector(".playAgain");
const results=document.querySelector(".results")





let time=0;

let trigger=setInterval(timerUpdate,1000)

// numberEntry.focus()

function timerUpdate(){
    time++
}

console.log(generatedNumber)
///event listeners
numberEntry.addEventListener("keyup",(e)=>{
    e.keyCode ===13? checkingProcess():false
});

checkButtton.addEventListener("click",checkingProcess);

againButton.addEventListener("click",reset)

function reset(){
    window.location.reload()
}

///Get data from LS

let arr=JSON.parse(localStorage.getItem("attempts"))

if (arr==null){
    arr=[];
}

///functions of event listeners

let counter=0;
function checkingProcess(){
    if (numberEntry.value==""){
        notifications.innerHTML=`<img class="ilber" src="./download.jpg" alt="">`
        setTimeout(clearImage,1000);
        return
    }else{
        if(generatedNumber==numberEntry.value){
            counter++
            notifications.innerHTML="helalll"+`<div>this is your ${counter} attempt</div>`
            numberEntry.value="";
            updateLocal();
            clearInterval(trigger);
            endOfGame.style.display="flex";

        }else{
            counter++
            notifications.innerHTML=
            generatedNumber>numberEntry.value ? ("up"+`<div>this is your ${counter} attempt</div>`):("down"+`<div>this is your ${counter} attempt</div>`)  ;

            wrong.innerHTML+= `${numberEntry.value}|`  
            numberEntry.value="";
        }
    }
    
}


function clearImage(){
    notifications.innerHTML="";
}

function updateLocal(){
        arr.push(time);
        arr.sort((a,b)=>a-b);
        (arr.slice(0,3)).forEach(item=>{
            results.innerHTML+=`${item}|`;
        })
        localStorage.setItem("attempts",JSON.stringify(arr.slice(0,3)))
}


console.log(arr)