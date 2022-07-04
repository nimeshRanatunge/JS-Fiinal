const listItem = document.querySelector('li.collection-item:first-child');
console.log(listItem);
console.log(listItem.nextSibling.nextSibling);

const li = document.createElement('li');
li.className = 'collection-item';
const text = document.createTextNode('Hello Earth');
li.append(text);
document.querySelector('ul').append(li);

//cut button
const cut = document.createElement('a');
cut.className = 'delete-item secondary-content';
cut.innerHTML = '<i class="fa fa-remove"></i>';

li.append(cut);
const list = document.querySelectorAll('li');
const par = document.querySelector('ul');
par.removeChild(list[0]);

let val = document.querySelector('li:first-child');
const link = val.children[0];
link.classList.add('new_class'); //to remove use remove instead of add
console.log(link);

link.setAttribute('href', 'https://msn.com'); //to see available attributes, use getattributes, use removeattribute to remove