import { sum } from "./severalFunctions";
import { toLowerCamelCase, toKebabCase, toSnakeCase } from "./severalFunctions";

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
  describe("When it receives text", () => {
    test("Then it should throw an error", () => {
      const expectedResult = "You must provide two numbers";
      const number1 = "2";
      const number2 = "Cucumber";

      expect(sum(number1, number2)).toEqual(expectedResult);
    });
  });
});

describe("Given toSnakeCase function", () => {
  describe("When it recieves the text 'holaMundo'", () => {
    test("Then it should return the text 'hola_Mundo", () => {
      const textLowerCamelCase = "holaMundo";
      const expectedText = "hola_Mundo";

      const textSnakeCase = toSnakeCase(textLowerCamelCase);

      expect(textSnakeCase).toBe(expectedText);
    });
  });

  describe("When it recieves an empty string", () => {
    test("Then it should return the text 'You must provide some text", () => {
      const noTextProvided = "";
      const expectedMessage = "You must provide some text";

      const expectedTextResult = toSnakeCase(noTextProvided);

      expect(expectedTextResult).toBe(expectedMessage);
    });
  });

  describe("When it recieves the text 'now-yes'", () => {
    test("Then it should return the text 'The text contains dashes", () => {
      const textWithDashes = "now-yes";
      const expectedMessage = "The text contains dashes";

      const expectedTextResult = toSnakeCase(textWithDashes);

      expect(expectedTextResult).toBe(expectedMessage);
    });
  });

  describe("When it recieves the text 'Alohomora'", () => {
    test("Then it should return the text 'The text starts with a capital letter", () => {
      const textStartsWithCapitalLetter = "Alohomora Alohomora";
      const expectedMessage = "Alohomora_Alohomora";

      const expectedTestResult = toSnakeCase(textStartsWithCapitalLetter);

      expect(expectedTestResult).toBe(expectedMessage);
    });
  });
});
// expresiones regulares
RegExp.prototype.test = function (str) {
  return !!str.match(this);
};

describe("Given a lowerCamelCase Function", () => {
  describe("When it receives an kebabCase text", () => {
    test("Then it should return the text  in lowerCamel", () => {
      const text = "alohomoraLohoMora";

      const expectedResult = toLowerCamelCase("alohomora-loho-mora");

      expect(expectedResult).toBe(text);
    });
  });
  describe("When it receives an empty string", () => {
    test("Then it should return the text 'You must provide some text", () => {
      const noTextProvided = "";
      const expectedMessage = "You must provide some text";

      const expectedTextResult = toLowerCamelCase(noTextProvided);

      expect(expectedTextResult).toBe(expectedMessage);
    });
  });
  describe("When it receives the text 'now-yes'", () => {
    test("Then it should return the text 'The text contains dashes", () => {
      const textWithDashes = "now_yes";
      const expectedMessage = "The text contains underscores";

      const expectedTextResult = toLowerCamelCase(textWithDashes);

      expect(expectedTextResult).toBe(expectedMessage);
    });
  });
});
describe("Given a kebabCase Function", () => {
  describe("When it receives an kebabCase text", () => {
    test("Then it should return the text  in lowerCamel", () => {
      const text = "alohomora_Loho_Mora";

      const expectedResult = toKebabCase("alohomoraLohoMora");

      expect(expectedResult).toBe(text);
    });
  });
});
