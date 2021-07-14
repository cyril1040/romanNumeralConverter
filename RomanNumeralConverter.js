function convertToRoman(num) {
  let roman = "";
  const romanNumList = {
    M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1
  };
  let a;
  if (num > 3999) {
    return "Enter a number between 1 and 3999";

  }else {
    for (let key in romanNumList) {
      a = Math.floor(num / romanNumList[key]);
      if (a >= 0) {
        for (let i = 0; i < a; i++) {
          roman += key;
        }

      }
      num = num % romanNumList[key];
    }
  }
  return roman;

}

convertToRoman(77);
