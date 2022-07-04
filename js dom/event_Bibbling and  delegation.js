//eVENT BUBBLING

//event delegation

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    if(e.target.className == 'fa fa-remove'){
        console.log('delete Item');
    }
}