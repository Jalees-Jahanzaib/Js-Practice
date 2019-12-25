// For each

 const numbers=[20,21,22,23,24,25,26,27,28,29]

const double=numbers.map(function odd(num){
	return num*2;
});

for(i=0;i<double.length;i++)
console.log(double[i]);

const double2=numbers.map(even);

for(i=0;i<double2.length;i++)
console.log(double2[i]);


 function even(num){
  if (num%2==0){
  return true;  }
else{
	return false;
}}