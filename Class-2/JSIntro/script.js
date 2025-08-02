// const a = 100;
// const b = 200;

// const res = a + b;
// console.log(res);

// // let, const; var
// // number
// // string
// // boolean
// // undefined
// // null
// // Symbol

// function add(x, y) {
//     return x + y;
// }

// function buildPerson() {
//     return {
//         name: 'Max',
//         age: 25,
//         hobbies: ['swimming', 'Tennis']
//     }
// }

// const colors = ['blue', 'orange', 'green', 'black'];

// // for loop
// for (let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// // for-of loop
// for (let color of colors) {
//     console.log(color);
// }

// // imperative vs declarative way of writing code
//     // => Recommened : Declarative

// console.log(add(4, 5));

// console.log(buildPerson());



// // 


// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const randomNum = Math.floor(Math.random() * 10 + 1); //1-10
//         if (randomNum < 5) {
//             resolve(randomNum);
//         } else {
//             reject(new Error(`Value of random number is ${randomNum}`));
//         }
//     }, 2000);
// });

// p.then((randomVal) => {
//         console.log(`Resolved with the value ${randomVal}`);
//     })
//     .catch((err) => {
//         console.log(`Rejected ${err.message}`);
//     })
//     .finally(() => {
//         console.log('Inside finally')
//     })


const p = fetch('https://fakestoreapi.com/products');

p.then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })