"use strict";

var usePrompt = function usePrompt() {
  return prompt(arguments.length <= 0 ? undefined : arguments[0]);
};

var countOfTry = 0; // для хранение количества попыток 

var maxValue = usePrompt(['введите максимальное целое число!']);

function testMaxValue(value) {
  while (Number(value) === 0 || Number(value) < 0 || Number(value) === undefined || Number(value) === null || !Number(value)) {
    value = usePrompt(['введите максимальное целое число!']);
  }

  alert("\u0417\u0430\u0433\u0430\u0434\u0430\u043D\u043E \u0447\u0438\u0441\u043B\u043E \u043E\u0442 0 \u0434\u043E ".concat(value, " \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u043E\u0442\u0433\u0430\u0434\u0430\u0442\u044C!"));
}

;
testMaxValue(maxValue);
var randomNumber = Math.floor(Math.random() * maxValue);
var userNumber = prompt('Попробуй!');

function testUser(value) {
  while (Number(value) < 0 || Number(value) === undefined || Number(value) === null) {
    value = usePrompt(['Введи целое число!']);
  }
}

;
testUser(userNumber);

function userNumberOrRandom(userNum, random) {
  while (1) {
    if (userNum > random) {
      userNum = prompt('Мое число меньше, попробуй еще!'); // добиваемся чтоб это было целое число

      testUser(userNum);
      countOfTry++;
    }

    ;

    if (userNum < random) {
      userNum = prompt('Мое число больше, попробуй еще!');
      testUser(userNum);
      countOfTry++;
    }

    ;

    if (userNum == random) {
      alert("\u0423\u0440\u0430! \u0423\u0433\u0430\u0434\u0430\u043B. \u0422\u0435\u0431\u0435 \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u043B\u043E\u0441\u044C ".concat(countOfTry, " \u043F\u043E\u043F\u044B\u0442\u043E\u043A!"));
      break;
    }

    ;
  }

  ;
}

userNumberOrRandom(userNumber, randomNumber);
//# sourceMappingURL=simpleGame.dev.js.map
