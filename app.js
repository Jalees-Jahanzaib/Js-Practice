// For each

 const numbers=[20,21,22,23,24,25,26,27,28,29]

const double=numbers.map(function odd(num){
	return num*2;
});



const double2=numbers.map((n,y)=>{
	return n*n+ y;
});



for(i=0;i<double2.length;i++)
console.log(double2[i]);