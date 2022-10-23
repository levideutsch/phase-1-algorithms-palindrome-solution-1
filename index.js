
function reverseString(word) {
  return word.split("").reverse().join("");

//   const wordArray =  word.split("")
//   const wordReverse = wordArray.reverse()
//   const wordJoin = wordReverse.join("")
  
//  return wordJoin
}




function isPalindrome(word) {

  const reversedWord = reverseString(word)

    if(word === reversedWord) {
      return true
    
    } else {

      return false
    }
  }


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
