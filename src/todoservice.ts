import TodoTypes from"./todo";


const LOCAL_STORAGE_KEY = "to-dos";

const todoservice = {
    // reretrieve ng todos
    getTodos: (): TodoTypes[] => {
    const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY)
    return todoStr ? JSON.parse(todoStr): [];
    },

    // a-add ng todos
    addTodos: (text:string): TodoTypes => {
        const todos = todoservice.getTodos();
        const newTodo: TodoTypes = {id: todos.length + 1, text, completed: false};
        const updateTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return newTodo;
    },

    // u-update ng todos
    updateTodo: (todo:TodoTypes): TodoTypes=> {
        const todos = todoservice.getTodos();
        const updateTodos = todos.map((t)=> (t.id === todo.id ? todo: t))
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
        return todo;
    },

    //d-delete ng todos
    deleteTodo: (id:number): void =>{
        const todos = todoservice.getTodos();
        const updateTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    }

};


export default todoservice