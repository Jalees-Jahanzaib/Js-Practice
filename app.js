function isVaidPassword(username ,password ){

   	 if(password.length < 8)
   	  return false;
  
if(password.indexOf(' ')!== -1)
    return false;
if (password.indexOf(username)!==-1)
    return false;

return true;
}
let x= isVaidPassword('jalees',"123jale s455")

console.log(`${x}`);
