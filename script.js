// complete the given function

function palindrome(str){
    char ch ;
	String s="";
	for (let index = str.length(); index >=0 ; index++) {
		ch=str.charAt(index);
		s=s+ch;
	}
	if(s==str){
		return true;
	}else{
		return false;
	}
}
module.exports = palindrome
