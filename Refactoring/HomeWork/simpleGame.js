/**
 * Это пример рабочего кода, который катастрофически нуждается в рефакторинге!
 * Твоя задача - привести его в надлежащий вид
 */

// Когда-то это была большая и сложная функция, но время ее не щадило
// function usePrompt(...text){

//     // остатки старого кода
//     // const ob = [
//     //     {
//     //         ..
//     //     }
//     // ]
//     // fun

//     return prompt(text[0])
// }
const usePrompt = (...text) => prompt(text[0]);

// получаем число от пользователя
let maxValue = usePrompt(['введите максимальное целое число!']);

// добиваемся чтоб это было целое число
while (
  Number(maxValue) === 0 ||
  Number(maxValue) < 0 ||
  Number(maxValue) === undefined ||
  Number(maxValue) === null ||
  !Number(maxValue)
) {
  maxValue = usePrompt(['введите максимальное целое число!']);
}
// if(Number(maxValue)){
//     maxValue = usePrompt(['введите максимальное целое число!']);
// }
// используем целое число как верхнюю границу рандомного числа
// let randomNumber = Math.floor(Math.random() * maxValue)
let randomNumber = ~~(Math.random() * maxValue);

alert(`Загадано число от 0 до ${maxValue} попробуй отгадать!`);

// тут будем хранить количество попыток
let countOfTry = 0;

let userNumber = prompt('Попробуй!');

// добиваемся чтоб это было целое число
while (
  Number(userNumber) < 0 ||
  Number(userNumber) === undefined ||
  Number(userNumber) === null
) {
  userNumber = usePrompt(['Введи целое число!']);
}

// while (1){

//     if (userNumber > randomNumber){
//         userNumber = prompt('Мое число меньше, попробуй еще!');

//         // добиваемся чтоб это было целое число
//         while (Number(userNumber) < 0 || Number(userNumber) === undefined || Number(userNumber) === null){
//             userNumber = prompt('Введи целое число!');
//         }

//         countOfTry++
//     }
//     if (userNumber < randomNumber){
//         userNumber = prompt('Мое число больше, попробуй еще!');

//         // добиваемся чтоб это было целое число
//         while (Number(userNumber) < 0 || Number(userNumber) === undefined || Number(userNumber) === null){
//             userNumber = prompt('Введи целое число!');
//         }

//         countOfTry++
//     }
//     if (userNumber == randomNumber){
//         alert(`Ура! Угадал. Тебе понадобилось ${countOfTry} попыток!`);
//         break;
//     }
// }
while (1) {
  switch (userNumber == randomNumber) {
    case userNumber > randomNumber:
      userNumber = prompt('Мое число меньше, попробуй еще!');
      while (
        Number(userNumber) < 0 ||
        Number(userNumber) === undefined ||
        Number(userNumber) === null
      ) {
        userNumber = prompt('Введи целое число!');
      }

      countOfTry++;
      break;
    case userNumber < randomNumber:
      userNumber = prompt('Мое число больше, попробуй еще!');
      while (
        Number(userNumber) < 0 ||
        Number(userNumber) === undefined ||
        Number(userNumber) === null
      ) {
        userNumber = prompt('Введи целое число!');
      }

      countOfTry++;
      break;
    case userNumber == randomNumber:
      alert(`Ура! Угадал. Тебе понадобилось ${countOfTry} попыток!`);
      break;
    default:
      alert('Нет таких значений');
  }
}
