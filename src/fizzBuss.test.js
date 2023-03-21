import fizBuz from "./fizzBuss";
describe("fizzBuss", () => {
    it("deberia devolver 1 para el numero 1", () => {
      expect(fizBuz(1)).toEqual(1);
    });
  });