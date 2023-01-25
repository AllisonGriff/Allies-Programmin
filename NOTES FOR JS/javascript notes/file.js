//console.log ("string or somthing")
//const dog= "izzy"
// set a varible by typing Const/let _ name//
//console.log(dog)
//let question=prompt("what is your favorite dog")
//console.log(question)
//console.log ("string or somthing")
//const dog= "izzy"
// set a varible by typing Const/let _ name//
//console.log(dog)

//expl
//let question=prompt("what is your favorite dog")
//console.log(question)
//const string1 =prompt("what is ur fav food")
//let string2= prompt("what is ur animal")
//console.log(string1+" "+string2)
//alert("your favorite food is "+ string1+ " "+ string2)

//1. prompt user to enter number
//2. ask user how much they are taxed
//3.calculate how much they pay in taxes
//4. alert how much they pay in taxes

// let income= prompt("what is your yearly income")
// let taxrate= prompt("what is your annual tax rate?")
// console.log(income)
// console.log(taxrate)

// let taxedammount= (income*taxrate)
// alert(taxedammount)
// // when trying to add mathmatical equations, do not use ""

//OBJECTS PRACTICE****

// let ourObject={name:"allie",dog:"molly",wage:3}
// //to tgt an object value you .key
// console.log(ourObject.wage)

// let allieLovesKevinsLoins={name:"allie",loveName:"kevin",kevinsGrades:{math:"A",science:"B",GPA:4.0}}
// console.log(allieLovesKevinsLoins.kevinsGrades.math)
// let white={1:2,2:3,3:4}
// allieLovesKevinsLoins.moolyFurColour=white
// console.log(allieLovesKevinsLoins)

// // ARRAYSSS
// let coinMaster=["cat","food",1,2]
// //arrays start in the 0th position
// console.log(coinMaster[0])
let students = [{fName: "Kevin", lName:"Fuller"},{fName: "Allie", lName: "Griffin"},{fName:"Alec"}]
// console.log(students)
// console.log(students[1].lName)
// console.table(students)
console.log(students.length)
let isTrue=true
let count=0
while (isTrue){
    if(count===students.length){
        isTrue=false
    }
    else{
        console.log(students[count])
        count=(count+1)
    }

}