const usePrompt = (...text) => prompt(text[0]);
let countOfTry = 0; // для хранение количества попыток 
let maxValue = usePrompt(['введите максимальное целое число!']);



function testMaxValue(value){
while (
    Number(value) === 0 ||
    Number(value) < 0 ||
    Number(value) === undefined ||
    Number(value) === null ||
    !Number(value)
  ) {
    value = usePrompt(['введите максимальное целое число!']);
  }
  alert(`Загадано число от 0 до ${value} попробуй отгадать!`);
  
};
testMaxValue(maxValue);

let randomNumber = ~~(Math.random() * maxValue);
let userNumber  = prompt('Попробуй!');

function testUser(value) { 
while (Number(value) < 0 || Number(value) === undefined || Number(value) === null){
     value = usePrompt(['Введи целое число!']);
   }
};

testUser(userNumber);


function userNumberOrRandom(userNum,random){
while (1){

    if (userNum > random){
        userNum = prompt('Мое число меньше, попробуй еще!');
        // добиваемся чтоб это было целое число
        testUser(userNum)
        countOfTry++
    };
    if (userNum < random){
        userNum = prompt('Мое число больше, попробуй еще!');
        testUser(userNum)
        countOfTry++
    };
    if (userNum == random){
        alert(`Ура! Угадал. Тебе понадобилось ${countOfTry} попыток!`);
        break;
    };
};

}
userNumberOrRandom(userNumber,randomNumber);


