const todos = [
    {
        title: 'Wash clothes',
        description: 'Do the laundry for the whole household before noon.',
        dueDate: '22/09/2023',
        priority: 'medium',
        complete: false,
    },
    {
        title: 'Go grocery shopping',
        description: 'Buy milk, bread, water, eggs and vegetables.',
        dueDate: '24/09/2023',
        priority: 'high',
        complete: false,
    },
    {
        title: 'Sweep porch',
        description: 'Sweep front porch to make house look better.',
        dueDate: '25/09/2023',
        priority: 'low',
        complete: false,
    },
];

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