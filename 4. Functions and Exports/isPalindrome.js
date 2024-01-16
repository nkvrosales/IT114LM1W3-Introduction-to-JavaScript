// Todo 4.6a Create a function called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation

function isPalindrome(str) {
  let j = str.length - 1
  for (let i = 0; i < str.length / 2; i++) {
      if (str[i] != str[j]) {
          return false;
      }
      j--;
  }
  return true;
}

    
// Todo 4.6b Set the isPalindrome function as the default export of the module
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
module.exports = isPalindrome;