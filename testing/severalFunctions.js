import { debug } from "console";

export const sum = (number1, number2) => {
  if (isNaN(number1) || isNaN(number2)) {
    return "You must provide two numbers";
  }

  return number1 + number2;
};

export const toLowerCamelCase = (text) => {
  if (text.match(/[A-Z]/)) {
    return "The text contains capital letters";
  }
  if (text.match(/[_]/)) {
    return "The text contains underscores";
  }
  if (text === "") {
    return "You must provide some text";
  }
  let newText = text.split("-");
  let capital = newText.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
  capital[0] = capital[0].toLowerCase();
  const newCamel = capital.join("");
  return newCamel;
};

toLowerCamelCase("some-text-in-kebab-case");

export const toSnakeCase = (text) => {
  if (text === "") {
    return "You must provide some text";
  }
  if (text[0].match(/[A-Z]/) === text[0]) {
    return "The text starts with a capital letter";
  }
  if (text.includes("-")) {
    return "The text contains dashes";
  }
  if (text.includes("_")) {
    return "The text contains underscores";
  }

  const regularExpression = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
  const separatedWords = text.match(regularExpression);
  return separatedWords.join("_");
};
toSnakeCase("someTextInCamel");

export const toKebabCase = (lowerCamelCaseText) => {
  if (lowerCamelCaseText === "") {
    return "You must provide some text";
  }
  if (lowerCamelCaseText[0].toUpperCase() === lowerCamelCaseText[0]) {
    return "The text starts with a capital letter";
  }
  if (lowerCamelCaseText.includes("-")) {
    return "The text contains dashes";
  }
  if (lowerCamelCaseText.includes("_")) {
    return "The text contains underscores";
  }

  const regularExpression = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
  const separatedWordsArray = lowerCamelCaseText.match(regularExpression);
  return separatedWordsArray.join("_");
};
