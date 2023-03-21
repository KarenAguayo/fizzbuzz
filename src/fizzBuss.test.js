import {fizBuz,cadenaFizzBuzz }from "./fizzBuss";
describe("fizzBuss", () => {
    it("deberia devolver 1 para el numero 1", () => {
      expect(fizBuz(1)).toEqual(1);
    });
    it("deberia devolver fizz para el numero 3", () => {
        expect(fizBuz(3)).toEqual("fizz");
    });
    it("deberia devolver buzz para el numero 5", () => {
      expect(fizBuz(5)).toEqual("buzz");
    });
    it("deberia devolver fizzbuzz para el numero 15", () => {
      expect(fizBuz(15)).toEqual("fizzbuzz");
    });
    it("deberia devolver fizz para el numero 6", () => {
      expect(fizBuz(6)).toEqual("fizz");
    });
    it("deberia devolver buzz para el numero 10", () => {
      expect(fizBuz(10)).toEqual("buzz");
    });
    it("genera fizzbuzz en rango de numeros", () => {
      expect(cadenaFizzBuzz(15)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, fizz, 13, 14, fizzbuzz");
    });
    
  });