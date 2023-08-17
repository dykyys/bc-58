/*
 * Проміси
 */

//? конструктор new Promise(callback(resolve, reject));

// const promise = new Promise((resolve, reject) => {
// setTimeout(() => {
//   console.log('setTimeout in promise after 1s');
//   resolve('good!');
// }, 1000);
//   reject('not good!');
// });

// let value = '';

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// console.log('value', value);

// В якому порядку будуть виведені в консоль значення?

// setTimeout(() => {
//   console.log('setTimeout');
// }, 0);

// console.log('console.log: 1');

// Promise.resolve()
//   .then(() => {
//     console.log('promise: 1');
//   })
//   .then(() => {
//     console.log('promise: 2');
//   });

// console.log('console.log: 2');

//? TASK 01
// Чи можна "перевиконати" проміс?

// promise перевиконати не можна

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data);
//     return data;
//   })
//   .then(data => {
//     console.log(data);
//     if (!data) {
//       throw new Error('Error in then!');
//     }
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('data in finally', data);
//   });

//? TASK 03
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('good!');
//   }, 1000);
//   resolve('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//     return data;
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
 * Є функція, яка генерує випадкові числа від 1 до 4.
 * Написати функцію, яка повертає проміс.
 * Зробіть так, щоб згенероване число було із затримкою функції setTimeout в секундах.
 * Оберніть все це в проміс, який у будь-якому разі повертає час затримки (і в resolve, і в reject).
 * Нехай проміс виконається успішно, якщо згенеровано 1 або 2 (`✅ Resolved after ${delay} sec`), і з помилкою - якщо 3 або 4 (`❌ Rejected after ${delay} sec`).
 */

const randomNumber = () => Math.round(Math.random() * 3) + 1;

const onSuccess = delay => console.log(`✅ Resolved after ${delay} sec`);
const onError = delay => console.log(`❌ Rejected after ${delay} sec`);

const makePromise = () => {
  return new Promise((resolve, rejected) => {
    const delay = randomNumber();

    setTimeout(() => {
      if (delay <= 2) {
        resolve(delay);
      } else {
        rejected(delay);
      }
    }, delay * 1000);
  });
};
makePromise().then(onSuccess).catch(onError);
