// function avg(arr){

// let x=0;
// for( let num  in arr ){
// console.log(`${num}`)
// x+=arr[num];
// }
// console.log(`${x}`)

// x=x/arr.length;
// return x;

// }

// let y=avg([5,10]);

function getCard(){

let number =Math.floor(Math.random()*13 +1);
cards={
	1:"A",
	2:"2",3:"3",4:"4",5:"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"J","12":"Q","13":"K"


}

let value1=cards[number];
console.log(`${value1}`)

let number2 =Math.floor(Math.random()*4 +1);
let colors={
1:"clubs",
2:"spades",
3:"Diamonds",
4:"Hearts"}

let value2=colors[number2]

console.log(`${value2}`)

let  Leaf = new Object();
Leaf.value=value1;
Leaf.colour=value2;
return Leaf;

}
