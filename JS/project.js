let userNameValue=location.search.split("=")[1].split("&")[0].split("+").join(" ");
let gameLevel=location.search.slice(-1);
let userNameSpan=document.querySelector(".userName");
let gameinfo=document.querySelector(".gameInfo");
let timerSpan=document.querySelector(".timer");
userNameSpan.innerText=userNameValue;
let elementCountiner=elementsCountiner();
elementCountiner.appendChild(gameinfo);
let score=0;
 
for(let i=0; i<localStorage.length;i++){
    if(JSON.parse(localStorage.getItem(localStorage.key(i))).name==userNameValue){
        score=JSON.parse(localStorage.getItem(localStorage.key(i))).score;
         

    }
}

startGame(userNameValue,gameLevel,timerSpan,score);



