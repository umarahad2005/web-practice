
const newDiv = document.createElement('div');

newDiv.textContent = 'This is a dynamically created div element! It was created using JavaScript and appended to the body.';

newDiv.id = 'dynamicDiv';

document.querySelector("p").appendChild(newDiv);

console.log('New div element has been created and appended to the body!');
console.log("task 1 is done");
const changeStyleBtn = document.getElementById('changeStyleBtn');
changeStyleBtn.addEventListener('click', function() {
    newDiv.style.color = 'red';
    newDiv.style.fontSize = '24px';
    console.log('Style changed: color is now red and font size is 24px');
});
console.log("task 2  is done");


const parents = document.querySelector(".parent");
console.log(parents.innerHTML);
console.log("task 3  is done");

const originalPara = document.getElementById('originalPara');
const newPara = document.createElement('p');
newPara.textContent = 'This is the new paragraph replacing the original one.';
originalPara.replaceWith(newPara);
console.log('Paragraph replaced successfully.');
const removableDiv = document.getElementById('removableDiv');
setTimeout(() => {
    removableDiv.remove();
    console.log('removableDiv has been removed after 3 seconds.');
}, 3000);
console.log("task 4 is done");


const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', function() {
    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('div');
        taskItem.textContent = taskText;
        taskItem.className = 'todo-item';
        todoList.appendChild(taskItem);
        console.log(`Task added: ${taskText}`);
        todoInput.value = '';
    } else {
        console.log('Input is empty. No task added.');
    }
});
console.log("task 5  is done");

