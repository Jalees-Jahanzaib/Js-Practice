const car ={
	Name :"BMW",
	Color:"Blue",
	Series:"S class"
}


const newo= (obj,k,v)=>{
return {...obj,[k]:v}
}
let k="Speed"
const newcar=newo(car,k,1000)


function car2(obj,k,v){
	car3={...obj};
	car3[k]=v;
	return car3;
}

car4=car2(car,k,10000)