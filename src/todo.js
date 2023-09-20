const todos = [];

exports.createTodo = (data) => {
    const todo = {
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        priority: data.priority,
        complete: false,
    };

    todos.push(todo);
};

exports.getTodo = (index) => {
    return todos[index];
};

exports.getTodos = () => {
    return todos;
};

exports.deleteTodo = (index) => {
    todos.splice(index, 1);
};