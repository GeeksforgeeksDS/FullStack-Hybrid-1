const todoInp = document.querySelector('#todo-inp');
const addBtn = document.querySelector('#add-btn');
const list = document.querySelector('#list');
const form = document.querySelector('form');

// -----------------------------Utilities


function syncToLocalStorage(todos) {
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

function uuid() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

// --------------------------Todos

const todos = JSON.parse(window.localStorage.getItem('todos') || '[]');

function addTodo(todo) {
    todos.push(todo);
    syncToLocalStorage(todos);
}

function deleteTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if(index ===-1){
        return;
    }

    // delete element from the todos array
    todos.splice(index, 1);
    syncToLocalStorage(todos);
}

// ----------------------- UI Related functions: Manipulating DOM

function refreshTodos() {
    
    // remove the li from the ul
    while (list.firstChild) {
        list.firstChild.remove();
    }

    // we are inserting todos again from the todos array.
    for (const todo of todos) {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex','justify-content-between');
        
        // create a inline container
        const textSpan = document.createElement('span');
        textSpan.innerText = todo.task;

        // Add other buttons such as delete and mark completed.
        // <i class="bi bi-trash"></i>
        const iconsSpan = document.createElement('span');
        const trashIcon = document.createElement('i');
        trashIcon.classList.add('bi', 'bi-trash');

        trashIcon.addEventListener('click', () => {
            deleteTodo(todo.id);
            refreshTodos();
        });
        
        iconsSpan.append(trashIcon);

        li.append(textSpan);
        li.append(iconsSpan);


        // append the dynamically created li to the list
        list.append(li);
    }
}

// --------------------------- Events

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // grab the text form the input
    const todoText = todoInp.value;

    // we can add validation here 


    // call the add todo function
    addTodo({ id: uuid(), task: todoText, completed: false });
    refreshTodos();
});


// Start the App
refreshTodos();
