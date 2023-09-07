function createTodo(data) {
    return {
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        priority: data.priority,
    };
}

const todo = createTodo({
    title: 'Wash dishes',
    description: 'Make sure to wash all dishes after dinner.',
    dueDate: (new Date()).toLocaleDateString(),
    priority: 'high',
});

console.log(todo);