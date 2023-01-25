// //IF STATMENTS(condition)
//     const dog= "molly"
//     let age= 3

//     if(age > 4){
//     console.log("you're young at heart")
//     }
//     else if(age === 3){
//     console.log("you're my molly <3")
//     }
// // === checks absolutely equal
// // one = would reassing the value and produce an error
//     //else{
//     console.log("why not?")
//     }

// //while
//     let pinNumber=1234
//     let guess=1000
//     while(guess !== pinNumber){
//         console.log("wrong sucka"+ guess)
//          guess=guess+1
//     }

//guess the number game
//IMPORTANT Make sure you change your string is chnaged to a number. otherwise you would be asking if "string"=== # and that will NEVER be true
let stopGame= true
while(stopGame){
let guess=prompt("Please guess a number")
    console.log(guess)
    guess= parseInt(guess)

    if((isNaN(guess))){
        alert("can you not read? I asked for a number")
    }
    else{

    let number=17
    
    if (guess> number){
    alert("higher than a mfer")
    }
    else if(guess=== number){
    alert("youre a smark cookie")
    stopGame=false
    }
    else{
    alert("shawty got too low")
    }
    }
}
