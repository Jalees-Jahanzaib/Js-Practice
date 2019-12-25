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