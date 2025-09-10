

import  {  useState } from 'react'
 import axios from 'axios'
import { useNavigate } from 'react-router'
import * as z from "zod"; 
const schema=z.object({ 
  title: z.string().min(1,"this filed must contain at least 1 char")
  
});
const Add = ({todos,setTodos}) => {
   const [todo,setTodo]=useState({title:""})
    
    const [error,setError]=useState({})
 const navigate=useNavigate()

const handelChange=(e)=>{
  
    setTodo({...todo,[e.target.name]:e.target.value})

}



   const handelSubmit=async(e)=>{
    e.preventDefault();
    const res=schema.safeParse(todo)
    if(res.success){
      
      const { data } = await axios.post("http://localhost:3000/todos", {
  ...todo
})

         
   
    setTodos([...todos, data])
      setTodo({ title: "" })
    setError({})
  }
  
   else
    {
    const errors = {}
     
      res.error.issues.forEach(err => errors[err.path[0]] = err.message)
      
      setError(errors)
   }
   setTodo({title:""})
   navigate("/")
  }
  return (
    <>
     <form  onSubmit={handelSubmit} className='mb-3' >
  <div  >
    <label htmlFor="title" className="form-label " ></label>
   
    <input type="text" className="form-control" id="title" placeholder='Enter a task...' name="title" value={todo.title} onChange={handelChange} style={{display:"inline",width:"84%" }}/>
     <button type="submit"  className="btn m-4 " 
        style={{ backgroundColor: "rgb(93, 232, 253)", fontWeight: "bold",display:"inline" }}> Add Todos</button>
   
  </div>
{error.title && <div className='alert alert-danger '>{error.title}</div>}


</form>
    </>
  )
}

export default Add
