import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Add from './Add'
import { useNavigate } from 'react-router'
import Edit from './Edit'
const Todos = () => {
    const [todos,setTodos]=useState([])
   
    const [loader,setLoader]=useState(false)
    const navigate =useNavigate()
    const redirectToEdit=(id)=>{
     navigate(`/edit/${id}`)

    }
    useEffect(()=>{
        const fetchData=async()=>{
            setLoader(true)
            const {data}=await axios.get("http://localhost:3000/todos")
            setTodos(data)
        }
        setTimeout(()=>{
         setLoader(false)
         fetchData()
        })
    },[])

   
  




const handleDelete=async(id)=>{
  const newTodos=todos.filter(todo=>todo.id !=id)
  setTodos(newTodos)
    await axios.delete("http://localhost:3000/todos/" + id)
}



  return (
    <> 
   

   
   <div style={{
    backgroundColor: "rgb(93, 232, 253)",
    height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
  <div  className="container"style={{ backgroundColor: "rgba(25, 53, 74, 1)", width: "1000px", padding: "20px", borderRadius: "10px" }}>
    <div style={{color:"rgba(184, 184, 184, 1)" ,fontWeight: "bold"}} className='mb-3 mt-3'>
      <img 
    src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg" 
    alt="icon"
    style={{ width: "35px", height:"35px", marginRight:"10px", borderRadius:"50%", objectFit:"cover",background:"transparent" }}/>
  {new Date().toLocaleDateString("eng-EG", { weekday: "long", day: "numeric", month: "long" })}
</div>


   <Add todos={todos} setTodos={setTodos}/>
    
      <div  style={{color:"rgba(159, 162, 164, 1)" }}>
        <ul className='list-unstyled '>
         { todos.map(todo=><li key={todo.id} className='d-flex align-items-center   py-2' style={{borderTop:"1px solid rgba(108, 108, 108, 1)"}} >
          
           
           <span className='flex-grow-1'><i className="fa-regular fa-circle-check me-3" style={{color:"rgba(108, 108, 108, 1)"}}></i>{todo.title}</span>
           
          
 <i className="fa-solid fa-trash " onClick={()=>handleDelete(todo.id)}></i> 
 

  <i
      className="fa-solid fa-user-pen ms-5"
      onClick={() => redirectToEdit(todo.id)}
    ></i>


         
         <hr ></hr>
         
         
         </li>)}
         
       </ul>
     

      </div>
    </div>
  </div>


  
    </>
   
  )
}

export default Todos