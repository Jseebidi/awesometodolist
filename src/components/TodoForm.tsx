import React, {Dispatch, SetStateAction, useState}  from 'react'
import TodoTypes from '../todo'
import todoservice from '../todoservice';
import "../CSS/TodoForm.css"
interface PropTypes{
    setTodos: Dispatch<SetStateAction<TodoTypes[]>>
}


const TodoForm:React.FC<PropTypes> = ({setTodos}) => {

const [newTodoText, setNewTodoText] = useState<string>("");
    const handleAddTodo = () => {
        if(newTodoText.trim() !== ""){
            const newTodo = todoservice.addTodos(newTodoText);
            setTodos((prevTodo) => [...prevTodo, newTodo]);
            setNewTodoText("");
        }
    };
  return ( 
    <div className='inputForm'>
      <input 
        type='text' 
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        autoFocus={true}
        placeholder='ADD A TASK GURT'
      />
    <button onClick={handleAddTodo}>ADD A TODO GURT</button>
    </div>
  );
};

export default TodoForm;
