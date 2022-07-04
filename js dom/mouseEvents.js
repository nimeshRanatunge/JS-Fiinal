//click, dblclick
const clearbtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

card.addEventListener('mousemove', runevent);

function runevent(e){
    console.log(`EVENT TYPE : ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

//keyboard

const taskInput = document.getElementById('task');
taskInput.addEventListener('keydown', runevent2);

function runevent2(e){
    console.log(`EVENT TYPE : ${e.type}`);

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

    heading.innerText = e.target.value;
}