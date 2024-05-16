// var validPalindrome = function (s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     if (s.charAt(left) === s.charAt(right)) {
//       left++;
//       right--;
//     }
//     if (s.charAt(left) !== s.charAt(right)) {
//       return (
//         validPalindromeChecker(s, left + 1, right) ||
//         validPalindromeChecker(s, left, right - 1)
//       );
//     }
//   }
//   return true;
// };

// const validPalindromeChecker = (s, i, j) => {
//   let left = i;
//   let right = j;
//   while (left < right) {
//     if (s.charAt(i) === s.charAt(j)) {
//       left++;
//       right--;
//     }
//     if (s.charAt(i) !== s.charAt(j)) {
//       return false;
//     }
//   }
//   return true;
// };
