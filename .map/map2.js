// mengubah state / object dalam array (immutability)

const todos = [
    { id: 1, task: 'Belajar JS', completed: false },
    { id: 2, task: 'Bikin Konten', completed: false }
]

const updatedTodos = todos.map(todo => {
    if (todo.id === 1) {
        return {...todo, completed : true};
    }
    return todo;
});

console.log(updatedTodos)