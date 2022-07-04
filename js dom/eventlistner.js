// document.querySelector('.clear-tasks').addEventListener('click', (e)=>{
//     console.log('Hello Earth!');

//     e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('mouseover', clicked);

function clicked(e){
    // console.log(e.target.classList);
    // console.log(e.type);
    let val;
    val = e.clientY;
    console.log(val);
}

/**
 * clientX and clientY x axis y axis distance to particular element from window
 * 
 * 
 * offsetx and offsetY coordinates relative to particular element
 * 
 * 
 */