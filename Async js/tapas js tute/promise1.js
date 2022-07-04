function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');

    setTimeout(f1, 0);

    new Promise((resolve, reject)=>{
        resolve('Iam promise');
        reject('Iam rejected!')
    }).then(resolve => console.log('hey ' + resolve)).catch(reject => console.log('ohh' + reject));

    f2();
}

main();