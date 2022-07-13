import sum from "./testing";

describe("Given the sum function", () => {
  describe("When it receives the number '2' and the number '3'", () => {
    test("Then it should return the number '5'", () => {
      //AAA
      ///Arange
      const expectedResult = 5;
      const number1 = 2;
      const number2 = 3;

      ///Act
      const result = sum(number1, number2);

      ///Asert
      expect(expectedResult).toBe(result);
    });
  });
});
