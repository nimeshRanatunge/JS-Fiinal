const http = new easyHttp;

// // Get users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));
// ;

// user data post

// const data = {
//     name: 'Nimesh ranatunge',
//     username: 'nimesh1996',
//     email: 'Sincere@april.biz@gmail.com'
// }

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// update data
// const data = {
//     name: 'Samsuung',
//     username: 'samsung56',
//     email: 'nimeshcharu@gmail.com'
// }


// http.put('https://jsonplaceholder.typicode.com/users/3', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

//delete data

http.delete('https://jsonplaceholder.typicode.com/users/5')
.then(data => console.log(data))
.catch(err => console.log(err));