// let promise = new Promise((resolve, reject)=>{
//     let value = 'water';
//     resolve(value);
// });

// const grandparentcooking = () =>{
//     promise.then((result)=>{
//         console.log(result);
//     })
// };

// grandparentcooking();

let promise = new Promise((resolve, reject)=>{
   setTimeout(()=>{
        reject(new Error('jack felled'));
   }, 2000)
});

const grandparentcooking = () =>{
    promise.catch((error)=>{
        console.log(error.message);
    })
};

grandparentcooking();