//for loops
// // // code that will be repeated mulltiple times,but can take multiple "expressions".the most usuable loop.
// written: for(exp1;exp2;exp3){
                //code to be executed
//}
//exp1-runs 1 time before the start of the loop
//exp2-condition that will end the loop
//exp3-happens after the block of code has been ran(when exp2 is met, exp3 does not happen)
// const ourList=["apple", 1, false,4,6,35,343,323,3232,23232,2323232,23232323232,32323234232,2423534,342,3234,3434,324343,43242,42423432,42424234,3423424]
// console.log(ourList.length)
// //         x=0        x<   22?yes     x(0)=x(0)+1
// //         x=1        x< 22?yes       X(1) =x(1)+1
// //
// //         x=22       X<22? No         stop    
// for(let count=0;count< ourList.length;count=count+1){
//                 //varible, condtion, action
//     console.log(ourList[count])
// }

//practice
// const ourNums=[454,4546,564,4321,4564,3546,3546,4546,646564,545464,465464662,5464465,3546,6546,5]

// for(let baseline=0;baseline< ourNums.length;baseline=baseline+1){
//     //console.log(ourNums[baseline])
//     let product=(ourNums[baseline])
//     console.log(product*2)
// }

// const cars = ["Saab", "Volvo", "BMW"]
// for(let base=0; base< cars.length;base=base+1){
//     let trash=(cars[base])
//     console.log("I would NEVER be caught diving a "+ trash)
// }

// const friends = [{fname: "allie", lname: "griffin"},{fname: "alec", lname: "purse"},{fname: "makayla", lname: "swims"}]

// for( let besties=0;besties<friends.length;besties=besties+1){
// let fam=(friends [besties])
// console.log(fam)
// console.log("my friend is "+(fam.fname)+" "+(fam.lname))
// }

// function champWeight(in1,in2){
//     return(in1*in2)
// }
// const u1=prompt("enter a number")
// const u2=prompt("another one")
// alert(champWeight(u1,u2))

// const D1=1000
// for(let name=0;name <D1;name=name+1){
//         console.log("sarah")
// }

const card=document.querySelector(".productGrid")
//console logging below is displaying the html in string form in the console. it is not essential the the fuctionality of the page.
console.log(card.innerHTML)
// let izzy="izzy "
//             //the `` allows you to write strings, but with the capability to include JS in the string
// const huck=`${izzy}is goofy`
// console.log(huck)
let html='<div class="card"><div class="img"><img src="http://3.bp.blogspot.com/_C5L04cCht34/TQ6lxrB8sWI/AAAAAAAAACg/u_EY-OUC2BE/s1600/Patrick_Star_by_NinjaSaus.png"><i class="fa-regular fa-heart"></i></div><div class="itemDes"><h3 class="Name">Patrick Patrick</h3> <p class="price">$99,999.99</p></div></div>'
//how you overide the existing html
//card.innerHTML=`${html}${html}`

const friends = [{fname: "allie", lname: "griffin"},{fname: "alec", lname: "purse"},{fname: "makayla", lname: "swims"}]
//grabbing objects from lists(var[position].key)
// console.log(friends[1].lname)
// for(let pos=0;pos<friends.length;pos=pos+1){
//     console.log(friends[pos].fname)
//     }

const products = 
[
{title: "Spongebob Plushie", price: "34.77", imgLink: "https://m.media-amazon.com/images/I/81G628NkuQL.jpg"},
{title: "Gamer Girl Bathwater", price: "15000.56", imgLink: "https://i1.sndcdn.com/artworks-000564270017-ua62sh-t500x500.jpg"},
{title: "Milk", price: "14.46", imgLink: "https://i5.walmartimages.com/asr/3592de4c-2d2d-4285-afbf-f0508775bd58_2.bb23225176016b4d5ce96c4efed80382.jpeg"},
{title: "Funfetti", price: "3", imgLink: "https://i5.walmartimages.com/asr/adad6b0f-0355-45ce-a315-519a5088ad1b.151a8cd83d5703071ad50d06aead012f.jpeg"},
{title: "Purpur Block", price: "1", imgLink: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d1/Purpur_Block_JE2_BE2.png/revision/latest?cb=20200302214854%22"},
{title: "Live Giraffe", price: "14000", imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/1200px-Giraffe_Mikumi_National_Park.jpg"},
{title: "A gun", price: "24", imgLink: "https://upload.wikimedia.org/wikipedia/commons/4/4f/SIG_Pro_by_Augustas_Didzgalvis.jpg"},
{title: "An image that has actualy nothing inside it. Simulates having a stroke", price: "34.56", imgLink: "https://preview.redd.it/80mcpfvbc1u21.jpg?auto=webp&s=cf243049d327277c4256485251f40506231ced2d"},
{title: "Microsoft word digital license", price: "450.54", imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png"},
{title: "Cookies", price: "3.23", imgLink: "https://www.thereciperebel.com/wp-content/uploads/2015/09/chocolate-chip-cookies-TRR-1200-6-of-11-500x500.jpg"},
]

//let html='<div class="card"><div class="img"><img src="http://3.bp.blogspot.com/_C5L04cCht34/TQ6lxrB8sWI/AAAAAAAAACg/u_EY-OUC2BE/s1600/Patrick_Star_by_NinjaSaus.png"><i class="fa-regular fa-heart"></i></div><div class="itemDes"><h3 class="Name">Patrick Patrick</h3> <p class="price">$99,999.99</p></div></div>'

let rhtml=""
for(let pos=0;pos<products.length;pos=pos+1){
  //  rhtml=rhtml+(`<p>${products[pos].title}</p> `)
rhtml=rhtml+`<div class="card"><div class="img"><img src=${products[pos].imgLink} alt=${products[pos].title}><i class="fa-regular fa-heart"></i></div><div class="itemDes"><h3 class="Name">${products[pos].title}</h3> <p class="price">$${products[pos].price}</p></div></div>`
}
console.log(rhtml)
card.innerHTML=rhtml