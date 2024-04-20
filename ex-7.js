function isPalindrome(string) {
  // Start coding here
  let characters  = string.split("");
  let reversedCharacters = characters.reverse();
  let reverseWord = reversedCharacters.join("");
  if(reverseWord === string) 
  {
    return true
  }
  else 
  {
    return false
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false