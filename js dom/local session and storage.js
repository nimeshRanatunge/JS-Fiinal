//set local storage item
//differerence between local and session storages
//local storage will stay until you manually clear it out
//session storage will leave throuch settings or program

/**
 *  while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.
 * with sessionStorage , the data is persisted only until the window or tab is closed. With localStorage , the data is 
 * persisted until the user manually clears the browser cache or until your web app clears the data
 */

//set local storage item
// localStorage.setItem('name', 'john');
// localStorage.setItem('age', '30');


//set session storage item
// sessionStorage.setItem('name', 'Brad');

//remove from local storage
// localStorage.removeItem('task');

//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;
   
    let tasks;

    //check if already containes values for tasks in local storage
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        //takes json string and parse into javascript object
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // add last inputed value for the object created above
    tasks.push(task);

    //add to local storage, before it, transform js object to json string
    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('task saved');
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task)=>{
    console.log(task);
})

//parse() takes a JSON string and transforms it into a JavaScript object.
// JSON. stringify() takes a JavaScript object and transforms it into a JSON string.