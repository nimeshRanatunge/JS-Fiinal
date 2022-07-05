console.log('promise chain');

const promise = new Promise((resolve, reject)=>{
    reject('rejecting a fake promise');
});

promise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})

