function toRomanLazy(num) {
  let output = ""
  let romanNumeraltoArabic = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}
  let romanNumberPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
  for(let i = 0; i<romanNumberPriorityOrder.length; i++){
    while(num >= romanNumeraltoArabic[romanNumberPriorityOrder[i]])  {
      output += romanNumberPriorityOrder[i]
      num -= romanNumeraltoArabic[romanNumberPriorityOrder[i]]
    }

  }
  return output;
}

console.log(toRomanLazy(76))



function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };

