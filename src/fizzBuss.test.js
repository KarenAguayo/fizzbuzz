import fizBuz from "./fizzBuss";
describe("fizzBuss", () => {
    it("deberia devolver 1 para el numero 1", () => {
      expect(fizBuz(1)).toEqual(1);
    });
    it("deberia devolver fizz para el numero 3", () => {
        expect(fizBuz(3)).toEqual("fizz");
    });
    it("deberia devolver fizz para el numero 5", () => {
      expect(fizBuz(5)).toEqual("buzz");
    });
    
  });