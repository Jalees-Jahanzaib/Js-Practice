function avg(arr){

let x=0;
for( let num  in arr ){
console.log(`${num}`)
x+=arr[num];
}
console.log(`${x}`)

x=x/arr.length;
return x;

}

let y=avg([5,10]);

