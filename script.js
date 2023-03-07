// complete the given function

function palindrome(str){
    let ch="" ;
	String s="";
	for (let index = (str.length-1); index >=0 ; index--) {
		ch+=str[index];
	
	}
	if(s==str){
		return true;
	}else{
		return false;
	}
}
module.exports = palindrome
