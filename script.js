const numberEntry=document.querySelector(".numberEntry");
const checkButtton=document.querySelector(".check");
const notifications=document.querySelector(".notifications")
const generatedNumber=Math.round(Math.random()*20);
const wrong=document.querySelector(".wrong");
const scores=document.querySelector(".scores");
const endOfGame=document.querySelector(".endOfGame");
const againButton=document.querySelector(".playAgain");
const results=document.querySelector(".results")


numberEntry.addEventListener("input",myFunction)


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

function myFunction(e){
    e.target.value = e.target.value.slice(0, 2)
}

let counter=0;
function checkingProcess(){
    if (numberEntry.value==""){
        notifications.innerHTML=`<img class="ilber" src="./download.jpg" alt="">`
        setTimeout(clearImage,2000);
        return
    }else{
        if(generatedNumber==numberEntry.value){
            counter++
            notifications.innerHTML="Congratulations"+`<div>this is your ${counter}. attempt</div>`
            notifications.style.color="green"
            numberEntry.value="";
            updateLocal();
            clearInterval(trigger);
            endOfGame.style.display="flex";

        }else{
            counter++
            notifications.innerHTML=
            generatedNumber>numberEntry.value ? ("up"+`<div>this is your ${counter}. attempt</div>`):("down"+`<div>this is your ${counter} attempt</div>`)  ;
            notifications.style.color="rgb(211, 46, 46)"

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
        let html="";
        (arr.slice(0,3)).forEach((item,index)=>{
            html+=`<div class="top-scores">${index+1}. <span> ${item}sn</span> </div>`;

        })
        results.innerHTML=html
        localStorage.setItem("attempts",JSON.stringify(arr.slice(0,3)))
}


console.log(arr)