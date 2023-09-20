import { createTodo, getTodo, getTodos, deleteTodo } from "./todo";
import { createElement } from "./utils";

const newTodoBtn = document.querySelector('.new-todo-btn');
const todoList = document.querySelector('.todo-list');
const todoInbox = document.querySelector('.todo-inbox');
const newTodoContainer = document.querySelector('.new-todo-container');
const newTodoForm = document.querySelector('.new-todo-form');

const titleInput = document.querySelector('#title');
const priorityInput = document.querySelectorAll('.priority input');
const dueDateInput = document.querySelector('#dueDate');
const descriptionInput = document.querySelector('#description');

const descriptionParagraph = document.querySelector('.description-text');

newTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = titleInput.value;
    let priority;
    priorityInput.forEach(element => {
        if (element.checked) {
            priority = element.value;
        }
    });
    const dueDate = new Date(dueDateInput.value);
    const description = descriptionInput.value;

    createTodo({ title, priority, dueDate, description });

    event.target.reset();

    toggleForm();
    renderTodos(getTodos());
});

todoList.addEventListener('click', (event) => {
    if (event.target.className != 'remove-btn') {
        return;
    }

    const todoElement = event.target.parentElement;
    console.log(todoElement.getAttribute('data-index'));
    deleteTodo(todoElement.getAttribute('data-index'));
    renderTodos(getTodos());
});

todoList.addEventListener('click', (event) => {
    if (event.target.className != 'complete-btn') {
        return;
    }

    const todoElement = event.target.parentElement;
    const todo = getTodo(todoElement.getAttribute('data-index'));
    todo['complete'] = true;
    todoElement.style.textDecoration = 'line-through';
    console.log(getTodos());
});

todoList.addEventListener('click', (event) => {
    if (event.target.className != 'todo-title') {
        return;
    }

    const todoElement = event.target.parentElement;
    const todo = getTodo(todoElement.getAttribute('data-index'));
    
    descriptionParagraph.textContent = todo.description;
});

newTodoBtn.addEventListener('click', toggleForm);

function toggleForm() {
    if (todoInbox.style.display == 'block' || todoInbox.style.display == '') {
        todoInbox.style.display = 'none';
    } else {
        todoInbox.style.display = 'block';
    }

    if (newTodoContainer.style.display == 'none' || newTodoContainer.style.display == '') {
        newTodoContainer.style.display = 'flex';
    } else {
        newTodoContainer.style.display = 'none';
    }
}

function renderTodos(todos) {
    todoList.replaceChildren();

    todos.forEach((todo, i) => {
        const li = createElement('li', { classes: ['todo']});
        li.setAttribute('data-index', i);

        const title = createElement('p', { content: todo.title, classes: ['todo-title'] });
        const priority = createElement('p', { content: todo.priority, classes: [todo.priority.toLowerCase(), 'todo-priority'] });

        const completeBtn = createElement('button', { classes: ['complete-btn'] });
        const completeBtnImg = createElement('img', { src: './assets/tick-icon.svg' });
        completeBtn.appendChild(completeBtnImg);

        const removeBtn = createElement('button', { classes: ['remove-btn'] });
        const removeBtnImg = createElement('img', { src: './assets/remove-icon.svg', classes: ['remove-img'] });
        removeBtn.appendChild(removeBtnImg);

        li.appendChild(title);
        li.appendChild(priority);
        li.appendChild(completeBtn);
        li.appendChild(removeBtn);

        todoList.appendChild(li);
    });
}

renderTodos(getTodos());