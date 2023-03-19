console.log("im sorry for what i did to ur toilet")

//how to creat a random number
//console.log(Math.floor(Math.random()*3)+1)
//console.log(Math.ceil(Math.random()*(500-250)+250))

//event listeners
const rock=document.querySelector(".rockButton")
const paper=document.querySelector(".paperButton")
const sza=document.querySelector(".szaButton")

rock.addEventListener("click",()=>game("rock"))
paper.addEventListener("click",()=>game("paper"))
sza.addEventListener("click",()=>game("sza"))

function compAns(CPU,Player){
    if(CPU===Player){
        return("it's a tie")
    }
    else if(CPU==="rock"&& Player==="sza"){
        return("rock would destroy SZA if you know what im sayin.CPU wins")
    }
    else if(CPU==="rock"&& Player==="paper"){
        return("doodle bob would really f up the Rock.Playa wins")
    }
    else if(CPU==="sza"&& Player==="rock"){
        return("rock would destroy SZA if you know what im sayin. playa wins")
    }
    else if(CPU==="sza"&& Player==="paper"){
        return("SZA really ate. CPU win")
    }
    else if(CPU==="paper"&& Player==="sza"){
        return("SZA really ate. Playa wins")
    }
    else if(CPU==="paper"&& Player==="rock"){
        return("doodle bob would really f up the Rock.CPU wins")
    }
}
function genCompAns(){
    let ranNum=(Math.ceil(Math.random()*3))

    if (ranNum===1){
        return("rock")
    }
    else{
        if (ranNum===2){
            return("paper")
        }
        else{if (ranNum===3){
            return("sza")
        }
        else{}}
    }
    
}
function game(playa){
    const h1=document.querySelector("h1")
    h1.innerHTML=(compAns(genCompAns(),playa))
}