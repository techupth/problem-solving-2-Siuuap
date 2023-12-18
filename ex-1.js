//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  let arrOfInput = s.toUpperCase().split("");
  let checkRepeatedInput = arrOfInput.map((letter, i, self) => {
    if (
      self[i] === self[i + 1] &&
      self[i] === self[i + 2] &&
      self[i] === self[i + 3]
    ) {
      return `error`;
    } else {
      return letter;
    }
  });
  console.log(checkRepeatedInput);
  if (checkRepeatedInput.includes(`error`)) {
    return;
  }
  let checkArrOfInput = arrOfInput.map((letter) =>
    letter === "I" ||
    letter === "V" ||
    letter === "X" ||
    letter === "L" ||
    letter === "C" ||
    letter === "D" ||
    letter === "M"
      ? `ok`
      : `error`
  );
  if (checkArrOfInput.includes(`error`)) {
    return `wrong format`;
  }

  let arrOfNum = arrOfInput.map((letter) => {
    if (letter === "I") return 1;
    if (letter === "V") return 5;
    if (letter === "X") return 10;
    if (letter === "L") return 50;
    if (letter === "C") return 100;
    if (letter === "D") return 500;
    if (letter === "M") return 1000;
  });
  console.log(arrOfNum);
  let result;

  let x = arrOfNum.map((num, i, self) => {
    if (self[i] < self[i + 1]) {
      if (
        self[i] - self[i + 1] === -4 ||
        self[i] - self[i + 1] === -9 ||
        self[i] - self[i + 1] === -40 ||
        self[i] - self[i + 1] === -90 ||
        self[i] - self[i + 1] === -400 ||
        self[i] - self[i + 1] === -900
      ) {
        return num;
      } else {
        return;
      }
    } else {
      return num;
    }
  });
  console.log(x);
  if (x.includes(undefined)) {
    return `wrong format`;
  }
  result = arrOfNum.reduce((acc, cur, i, self) => {
    if (self[i] < self[i + 1]) {
      acc = acc - cur;
    } else {
      acc = acc + cur;
    }
    return acc;
  }, 0);
  return result;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
console.log(result1);
console.log(result2);
console.log(result3);
console.log(romanToInt(""));
