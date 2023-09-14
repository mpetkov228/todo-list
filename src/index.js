import { createTodo, readTodos } from "./todo";

const newProjectBtn = document.querySelector('.new-project-btn');

newProjectBtn.addEventListener('click', () => {
    createTodo({
        title: 'new todo',
        description: 'todo description',
        dueDate: 'today',
        priority: 'low',
    });
    
    readTodos();
});
