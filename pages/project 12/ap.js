console.log(5+5);
let numberone =3;
console.log(numberone);
numberone =5;
console.log(numberone);
let sum =0;
sum=1;
console.log(sum)
sum=sum+2
console.log(sum)
let fname="string"
console.log(fname)
console.log(5>4)
console.log(4>5)
console.log(sum>4)
console.log(sum===7)
console.log(sum !==7)
if (false){
    console.log("hi")
}
if(sum>5){
    console.log("sumegreaterthan5")
} else{
    console.log("sumlessthan5")
}
function checknumber(inputone){
    let number=1;
    let number2=2;
    number=number+number2+inputone
    return number
}
console.log(checknumber(5))
console.log(checknumber(4))
function addtax(salestax){
    let taxrate=0.07
    let sum=salestax
    sum=sum+(sum*taxrate)
    return sum
}
console.log(addtax(1000))
function budget(money,goal){
    if(addtax(money)<goal){
        console.log("u did grt")
    }
    else{
        console.log("broky mcbrokerson")
    }
}
budget(600,800)