const input = document.querySelector("input");
const buttons =document.querySelector("button");
const delete_button= document.querySelectorAll(".bodyy")[0];
const ul = document.querySelector("ul");
const body = document.querySelector("body");



// LOCALSTORAGE *************************

const getTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos =[];
    } else {
        todos =JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
};

const setTodoLocalStorage = (newTodo) => {
    let todo = getTodos();
    todo.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todo));
};


// ADD TODO ******************************

const addTodo = (e) => {
    const newTodo = input.value.trim()
    if(newTodo === ""){
        console.log("Basarisiz");
    } else if (e.key === "Enter" || e.key === undefined){
        console.log("basarili");
        addTodoUI(newTodo);
        setTodoLocalStorage(newTodo);

    }
};


// DELETE ********************************

const deleteTodo = (e) => {
    if(e.target.className === "fa-sharp fa-solid fa-trash p-2"){
        e.target.parentElement.parentElement.remove();
    }
};

// ADDTODOUI *****************************
const addTodoUI = (newTodo) => {
    
//     <li class="border flex justify-between items-center w-full px-[1rem] min-h-[3rem] rounded-lg shadow-lg">
//     Enter Todos
//     <p class="hover:scale-125 cursor-pointer">
//     <i id="a" class="flex fa-sharp fa-solid fa-trash p-2"></i>
//     </p>
//     </li>

    const listItem = document.createElement("li");
    const pa = document.createElement("p");
    pa.className = "hover:scale-125 cursor-pointer";
    pa.innerHTML = '<i class="fa-sharp fa-solid fa-trash p-2"></i>';
    listItem.className =
    "border flex justify-between items-center w-full px-[1rem] min-h-[3rem] rounded-lg shadow-lg";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(pa);

    ul.appendChild(listItem);
    input.focus();
    input.value = "";
};

// LOAD ALL TODOS *************************
const loadAllTodos = () =>{
    let todos = getTodos();

    todos.forEach(element => {
        addTodoUI(todo);
    });
};


// DELETE TODOS LOCAL STORAGE *************


// const dleteTodoStorage =(deleteTodo)=> {
//     let todos =getTodos;

//     todos.forEach((todo,idx)) => {
//         if (todo === deleteTodo) {
//             todos.splice(idx, 1);
//         };

//     }

// };

// CLICK EKLEMEK **************************

input.addEventListener("keyup", addTodo)
buttons.addEventListener("click", addTodo);
delete_button.addEventListener("click", deleteTodo);

