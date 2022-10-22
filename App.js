import React,{useState}from 'react'
import TodoList from './TodoList'

const App=()=>
{
  const [task,setTask]=useState("")
  const [todos,setTodos]=useState([])
  const changeHandler=e=>
  {
    setTask(e.target.value)
  }
  const submitHandler=e=>
  {
    e.preventDefault();
    const Newtodo=[...todos,task];
    setTodos(Newtodo);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  
  return(
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Todo Mangment Application</h5>
            <form onSubmit={submitHandler}>
              <input type="text"  value={task} name='task' onChange={changeHandler}/>&nbsp;&nbsp;
              <input type="submit" name='Add' value='Add'/>
            </form>
          <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}
export default App