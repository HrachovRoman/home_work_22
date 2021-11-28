function funcPalindrome(num, stepsCount = 0) {
   
    let str = num.toString();
  
    let strReverse = str.split("").reverse().join("");
  
    if (str === strReverse) {
      return {
        result: num,
        steps: stepsCount,
      };
    }
    return funcPalindrome(num + (+strReverse), stepsCount + 1);
  }
  
  console.log(funcPalindrome(96)); // {result: 4884, steps: 4}