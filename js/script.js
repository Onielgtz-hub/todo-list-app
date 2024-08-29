document.getElementById('add-button').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');
        listItem.textContent = todoText;
        todoList.appendChild(listItem);

        todoInput.value = '';
    }
});
