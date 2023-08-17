//? Запит за користувачем на колбеках

const onSuccess = user => console.log(`✅ Resolved`, user);
const onError = error => console.log(`❌ Rejected`, error);

// const fetchUserByName = (name, resolve, rejected) => {
// setTimeout(() => {
//   const isDone = Math.random();
//   if (isDone < 0.2) {
//     console.log('Success');
//     const user = { name: 'Mango', age: 21, email: 'mango@gmail.com' };
//     resolve(user);
//   } else {
//     console.log('Error');
//     rejected('Error, not found');
//   }
// }, 1500);
// };

// fetchUserByName('Mango', onSuccess, onError);

//? Запит за користувачем на промісах
// const fetchUserByName = name => {
//   console.log('Робимо запит на сервер');
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       const isDone = Math.random();
//       if (isDone < 0.5) {
//         console.log('Success');
//         const user = { name: 'Mango', age: 21, email: 'mango@gmail.com' };
//         resolve(user);
//       } else {
//         console.log('Error');
//         rejected('Error, not found');
//       }
//     }, 1500);
//   });
// };
// fetchUserByName('Mango').then(onSuccess).catch(onError);

// https://api.github.com/users/dykyys
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

const getUser = name => {
  const url = `https://api.github.com/users/${name}`;

  return new Promise((resolve, rejected) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', () => {
      resolve(xhr);
    });
    xhr.addEventListener('error', () => {
      rejected(xhr);
    });
  });
};

getUser('qwerqwervdf')
  .then(response => {
    console.log(response);
    if (response.status === 200) {
      return JSON.parse(response.responseText);
    }

    return Promise.reject('Error!!');
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
