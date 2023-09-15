import { createTodo, getTodos } from "./todo";
import { createElement } from "./utils";

const newTodoBtn = document.querySelector('.new-todo-btn');
const todoList = document.querySelector('.todo-list');

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
        const removeBtnImg = createElement('img', { src: './assets/remove-icon.svg' });
        removeBtn.appendChild(removeBtnImg);

        li.appendChild(title);
        li.appendChild(priority);
        li.appendChild(completeBtn);
        li.appendChild(removeBtn);

        todoList.appendChild(li);
    });
}

renderTodos(getTodos());