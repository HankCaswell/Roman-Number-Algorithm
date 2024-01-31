const {toRomanLazy, toRoman} = require("./romanNumerals.js");

describe("Lazy Roman Numerals Test", () => {
    test("toRomanLazy(4) === IIII", () => {
      expect(toRomanLazy(4)).toBe("IIII");
    });
  
    test("toRomanLazy(150) === CL", () => {
      expect(toRomanLazy(150)).toBe("CL");
    });
  
    test("toRomanLazy(944) === DCCCCXXXXIIII", () => {
      expect(toRomanLazy(944)).toBe("DCCCCXXXXIIII");
    });
  });

  describe("Real Roman Numerals Test", () => {
    test("toRomanLazy(4) === IV", () => {
      expect(toRoman(4)).toBe("IV");
    });
  
    test("toRomanLazy(150) === CL", () => {
      expect(toRoman(150)).toBe("CL");
    });
  
    test("toRomanLazy(944) === CMXLIV", () => {
      expect(toRoman(944)).toBe("CMXLIV");
    });
  });



  





console.log(toRomanLazy(4) === "IIII");
console.log(toRomanLazy(150) === "CL");
console.log(toRomanLazy(944) === "DCCCCXXXXIIII");

console.log(toRoman(4) === "IV");
console.log(toRoman(150) === "CL");
console.log(toRoman(944) === "CMXLIV");







