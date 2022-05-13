function isPalindrome(word) {
  let palindrome =  word.split("")
  
  let checkWord = []
  for(let i = palindrome.length; i > 0; i--){
    checkWord.push(palindrome[i])
  }
  checkWord.push(palindrome[0])

  console.log(word)
  console.log(palindrome)
  console.log(checkWord)

  if(checkWord === word){
    return true
  } else{
    return false
  }

}
isPalindrome("anything")
