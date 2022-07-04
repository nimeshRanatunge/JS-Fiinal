let promise = new Promise((resolve, reject)=>{
    let value = 'water';
    resolve(value);
});

const grandparentcooking = () =>{
    promise.then((result)=>{
        console.log(result);
    })
};

grandparentcooking();