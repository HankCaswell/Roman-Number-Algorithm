function toRomanLazy(num) {
  let output = ""
  let romanNumeraltoArabic = { "M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1 }
  let romanNumberPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
  for (let i = 0; i < romanNumberPriorityOrder.length; i++) {
    timesCanBeDivided = Math.floor(num / romanNumeraltoArabic[romanNumberPriorityOrder[i]])
    while (timesCanBeDivided > 0) {
      output += romanNumberPriorityOrder[i]
      num -= romanNumeraltoArabic[romanNumberPriorityOrder[i]]
      timesCanBeDivided -= 1
    }
  }

  return output;

}



console.log(toRomanLazy(76))



function toRoman(num) {
  let output = ""
  let romanNumeraltoArabic = { "M": 1000, "CM": 900, "D": 500, "CD":400,  "C": 100, "XC": 90,"L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1 }
  let romanNumberPriorityOrder = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  for(let i = 0; i< romanNumberPriorityOrder.length; i++){
    while(num >= romanNumeraltoArabic[romanNumberPriorityOrder[i]])  {
      output += romanNumberPriorityOrder[i]
      num -= romanNumeraltoArabic[romanNumberPriorityOrder[i]]
    }
  }

  return output;

}

console.log(toRoman(4))
console.log(toRoman(90))






