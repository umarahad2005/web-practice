// ========================================
// DOM Practice Exercises - JavaScript File
// ========================================
// Write your solutions here!

console.log("Practice file loaded! Open console to see this message.");
console.log("Try to solve each exercise by writing code below.");

// ========================================
// Exercise 1: Change Text Content
// ========================================
// TODO: Write your code here
// Hint: 
// 1. Select the button with id 'changeTextBtn'
// 2. Select the paragraph with id 'text1'
// 3. Add click event listener to button
// 4. Change the paragraph textContent



// ========================================
// Exercise 2: Change Styles
// ========================================
// TODO: Write your code here
// Hint:
// 1. Select button 'changeColorBtn' and box 'box1'
// 2. Add click event
// 3. Change style.backgroundColor and style.color



// ========================================
// Exercise 3: Toggle Visibility
// ========================================
// TODO: Write your code here
// Hint:
// 1. Select button 'toggleBtn' and box 'box2'
// 2. Add click event
// 3. Use classList.toggle('hidden')



// ========================================
// Exercise 4: Input Counter
// ========================================
// TODO: Write your code here
// Hint:
// 1. Select input 'textInput' and counter 'counter'
// 2. Add 'input' event listener (fires on every keystroke)
// 3. Update counter with input.value.length



// ========================================
// Exercise 5: Add Items to List
// ========================================
// TODO: Write your code here
// Hint:
// 1. Select input, button, and list
// 2. On button click:
//    - Get input value
//    - Create new div element
//    - Set className and textContent
//    - appendChild to list
//    - Clear input



// ========================================
// Exercise 6: Click to Remove Items
// ========================================
// TODO: Write your code here
// Hint:
// 1. Use querySelectorAll to select all items
// 2. forEach item, add click listener
// 3. Call item.remove() when clicked



// ========================================
// Exercise 7: Active Panel Toggle
// ========================================
// TODO: Write your code here
// Hint:
// 1. Select all panels with querySelectorAll
// 2. forEach panel, add click listener
// 3. Inside click:
//    - Remove 'active' from all panels (forEach)
//    - Add 'active' to clicked panel



// ========================================
// Exercise 8: Todo List with Complete
// ========================================
// TODO: Write your code here
// Hint:
// 1. Select input, button, and list
// 2. On button click:
//    - Create todo div
//    - Add click event to todo to toggle 'completed' class
//    - Append to list



// ========================================
// Exercise 9: Keyboard Event
// ========================================
// TODO: Write your code here
// Hint:
// 1. Select keyDisplay div
// 2. Add 'keydown' event to window
// 3. Update innerHTML with event.key, event.keyCode, event.code



// ========================================
// Exercise 10: Form Submit
// ========================================
// TODO: Write your code here
// Hint:
// 1. Select form, input, and greeting
// 2. Add 'submit' event to form
// 3. DON'T FORGET: e.preventDefault()
// 4. Get input value and update greeting



// ========================================
// 🎯 SOLUTIONS (Try yourself first!)
// ========================================
// Uncomment the solutions below after you've tried!

/*

// Solution 1: Change Text Content
const changeTextBtn = document.querySelector('#changeTextBtn');
const text1 = document.querySelector('#text1');

changeTextBtn.addEventListener('click', () => {
    text1.textContent = 'Text Changed!';
    console.log('Text changed!');
});

// Solution 2: Change Styles
const changeColorBtn = document.querySelector('#changeColorBtn');
const box1 = document.querySelector('#box1');

changeColorBtn.addEventListener('click', () => {
    box1.style.backgroundColor = 'red';
    box1.style.color = 'white';
    console.log('Color changed!');
});

// Solution 3: Toggle Visibility
const toggleBtn = document.querySelector('#toggleBtn');
const box2 = document.querySelector('#box2');

toggleBtn.addEventListener('click', () => {
    box2.classList.toggle('hidden');
    console.log('Toggled visibility!');
});

// Solution 4: Input Counter
const textInput = document.querySelector('#textInput');
const counter = document.querySelector('#counter');

textInput.addEventListener('input', () => {
    counter.textContent = textInput.value.length;
});

// Solution 5: Add Items to List
const itemInput = document.querySelector('#itemInput');
const addItemBtn = document.querySelector('#addItemBtn');
const itemList = document.querySelector('#itemList');

addItemBtn.addEventListener('click', () => {
    const text = itemInput.value.trim();
    
    if(text !== '') {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = text;
        itemList.appendChild(item);
        itemInput.value = '';
        console.log('Item added:', text);
    }
});

// Solution 6: Click to Remove Items
const removeItems = document.querySelectorAll('#removeList .item');

removeItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log('Removing item:', item.textContent);
        item.remove();
    });
});

// Solution 7: Active Panel Toggle
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panels.forEach(p => p.classList.remove('active'));
        panel.classList.add('active');
        console.log('Active panel:', panel.textContent);
    });
});

// Solution 8: Todo List with Complete
const todoInput = document.querySelector('#todoInput');
const addTodoBtn = document.querySelector('#addTodoBtn');
const todoList = document.querySelector('#todoList');

addTodoBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    
    if(text !== '') {
        const todo = document.createElement('div');
        todo.className = 'todo-item';
        todo.textContent = text;
        
        todo.addEventListener('click', () => {
            todo.classList.toggle('completed');
            console.log('Toggled completed:', text);
        });
        
        todoList.appendChild(todo);
        todoInput.value = '';
        console.log('Todo added:', text);
    }
});

// Solution 9: Keyboard Event
const keyDisplay = document.querySelector('#keyDisplay');

window.addEventListener('keydown', (e) => {
    keyDisplay.innerHTML = `
        <h3>Key: ${e.key === ' ' ? 'Space' : e.key}</h3>
        <p>KeyCode: ${e.keyCode}</p>
        <p>Code: ${e.code}</p>
    `;
    console.log('Key pressed:', e.key);
});

// Solution 10: Form Submit
const myForm = document.querySelector('#myForm');
const formInput = document.querySelector('#formInput');
const greeting = document.querySelector('#greeting');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = formInput.value;
    greeting.textContent = `Hello, ${name}!`;
    greeting.style.color = '#4CAF50';
    greeting.style.fontSize = '20px';
    
    formInput.value = '';
    console.log('Form submitted, name:', name);
});

*/
