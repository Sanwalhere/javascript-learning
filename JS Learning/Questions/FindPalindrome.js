// --------------------------------------------|Find the Palindrome number|--------------------------------------------------

// Question 4: Find the Palindrome number, if it is return true otherwise false
// 121 = true
// 1234 = false
// 03130 = true

var isPalindrome = function (x) {
  let copyNum = x;
  let reverseNum = 0;

  while (copyNum > 0) {
    const lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }

  return x === reverseNum;
};

console.log(isPalindrome(131));
