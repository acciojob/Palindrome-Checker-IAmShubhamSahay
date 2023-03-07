// complete the given function

function palindrome(str){
    let ch="" ;
	str=str.toLowerCase();
	for (let index = (str.length-1); index >=0 ; index--) {
		ch+=str[index];
	
	}
	if(ch==str){
		return true;
	}else{
		return false;
	}
}
module.exports = palindrome
