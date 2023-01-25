//function takes 2 inputs strings
//combine together 1 and 2
//****basic funtion***** */

// function favDog(input1, input2){
//    return("my favorite dog is "+input1+" and"+input2)
// }
// console.log(favDog("molly", " also molly"))

// function addition(num1,num2){
//    let sum=(num1+num2)
//    return(sum)
// }
// //call a funtion
// console.log(addition(2,2))

//input and output varibles
// function rentCalc(income){
//     let expectedRent=(income * .30)
//     return(expectedRent)
// }
// console.log(rentCalc(1000))
// const question=prompt("how much was din din?")
// console.log(question)



// function tipRate(Bill){
//     let expectTip=(Bill*.99)
//     if(Bill>100){
//         expectTip=(Bill*.22)
//     }
//     return(expectTip)
// }
// alert (tipRate(question))


// function posNeg(num1,num2){
//    let multiple=(num1* num2)
//    //inputs inside the function only effect the fuction

//    if(multiple<0){
//     return("negative")

//    }
//    else if(multiple===0){
//     return("sero")
//    }
//    else{
//     return("positive")
//    }
//    }
//    let in1=prompt("gimme a number")
//    let in2=prompt("gimme another")
//    console.log(posNeg(in1, in2))


// function addition(num1,num2){
//    let sum=(num1+num2)
//    return(sum)
// }
// //call a funtion
// console.log(addition(2,2))

function molly(input){
   if(input==="Izzy"){
      return("molly")
   }
   else if(input==="izzy"){
   return("molly is a good girl")
   }
   else{
      return(input)
   }
}
// console.log(molly("izzy"))
// console.log(molly("huck"))
// console.log(molly("Izzy"))
// let dogName=prompt("Quick! there's a fire and you can only save one dog. Who is living")
// alert(molly(dogName))

function addStrings(input1,input2){
   return("my favorite dogs are "+molly(input1)+" and"+molly(input2))
}
console.log(addStrings("izzy"," Champion"))