const user = {email: 'kcd@gmail.com'};

// try//test for errors of something
// catch//handle errors

try {
    myf();
} catch(e) {
    console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
} finally {
    console.log("finally runs regardless of run");
}
// using try catch we can handle errors without stopping entire script

console.log('Program continues....');

if(!user.name){
    // throw 'User has not name';
    throw new SyntaxError('suer has not name');
}