import React,{useState} from "react";

function  TodoList(){
    const [todo , setTodo] = useState("");
    const [todos , setTodos] = useState([]);

    const handleAddtodo = () => {
    if(todo.trim()!==""){
        setTodos([...todos,todo]);
        setTodo("");
    }
    };

    const handleDeleteTodo =(index) =>{
    setTodos(todos.filter((_,i)=>i !== index));
    }
return(
    <div className="container">
    <input type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder="nhap todo"
    />
        <button onClick={handleAddtodo}>them todo</button>
    <ul>
    {todos.map((todoItem,index) =>(
        <li key={index}>
        {todoItem} <button onClick ={() => handleDeleteTodo(index)}>Xoa</button>

        </li>
    )

    )}
    </ul>

</div>

);
}
export default TodoList;