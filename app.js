const annoyer= {

pharases:["literally",'crary cray','I cant even ',"YOLO","hc","actually",'aaa']
,
pickphrase(){
	const arr=this.pharases;
	const idx = Math.floor(Math.random()*arr.length);
	return arr[idx];
}
,
start(){
	
	this.id=setInterval(()=>{
console.log(this.pickphrase())

	},3000);
},
stop(){
clearInterval(this.id)
clear()

}

}