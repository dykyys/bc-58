// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */

//? Створіть функцію loadScript(url), яка буде створювати та додавати скрипт на сторінку
//? Передайте колбек, який буде викликатися по завершеню завантаженя скрипта

//? Опрацюйте помилки

//? Завантаженя декількох скриптів

//? Пекельна піраміда колбеків

// const loadScript = (ulr, callbck) => {
//   const script = document.createElement('script');
//   script.src = ulr;
//   document.body.append(script);
//   script.addEventListener('load', () => {
//     console.log('added success');
//     return callbck(script);
//   });
//   script.addEventListener('error', () => {
//     console.log('not added error');
//     callbck(null, 'Error from loadScript');
//   });
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   (script, error) => {
//     if (script) {
//       console.log('lodash added success');
//       loadScript(
//         ' https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//         (script, error) => {
//           if (script) {
//             console.log('jquery added success');
//             loadScript(
//               ' https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//               (script, error) => {
//                 if (script) {
//                   console.log('slick-carousel added success');

//                 } else {
//                   console.log(error);
//                 }
//               }
//             );
//           } else {
//             console.log(error);
//           }
//         }
//       );
//     } else {
//       console.log(error);
//     }
//   }
// );

const loadScript = ulr => {
  const script = document.createElement('script');
  script.src = ulr;
  document.body.append(script);
  return new Promise((resolve, reject) => {
    script.addEventListener('load', () => {
      console.log('added success');
      resolve(script);
    });
    script.addEventListener('error', () => {
      console.log('not added error');
      reject('Error from loadScript');
    });
  });
};
loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(data => {
    console.log('lodash added success');
    return loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
    );
  })
  .then(() => {
    console.log('ajax added success');
    return loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
    );
  })
  .then(() => {
    console.log('slick-carousel added success');
  })
  .catch(error => {
    console.log(error);
  });
