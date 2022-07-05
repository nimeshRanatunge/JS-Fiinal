const f1 = ()=>{
    console.log('f1');
}

const f2 = ()=>{
    console.log('f2');
}

const f3 = ()=>{
    console.log('f3');
}

const main = ()=>{
    console.log('main');

    setTimeout(f1, 1000); // think that 1000 actual time to run this with servers
    setTimeout(f2, 100);

    f3();

}

main();