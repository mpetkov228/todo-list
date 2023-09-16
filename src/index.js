import { createTodo, getTodo, getTodos, deleteTodo } from "./todo";
import { createElement } from "./utils";

const newTodoBtn = document.querySelector('.new-todo-btn');
const todoList = document.querySelector('.todo-list');

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

newTodoBtn.addEventListener('click', () => {
    createTodo({
        title: 'new todo',
        description: 'todo description',
        dueDate: 'today',
        priority: 'low',
    });

    renderTodos(getTodos());
});


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