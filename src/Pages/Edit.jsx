
import { useParams,useNavigate } from 'react-router'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Edit = () => {
     const [todo,setTodo]=useState({title:""})
   
  
const navigate=useNavigate()
 const {id}=useParams();
  const redirectToTodos=()=>{
     setTodo({title:""})
    navigate("/")
  }
    



const handelChange=(e)=>{
  
  setTodo({...todo,[e.target.name]:e.target.value})
 
   }
  



 useEffect(()=>{
        const fetchData=async()=>{
           
            const {data}=await axios.get(`http://localhost:3000/todos/${id}`)
            setTodo(data)
        }
        fetchData()
       
    },[id])

    

   const handelSubmit=async(e)=>{
    e.preventDefault();
     if (todo.title !== "") {
    await axios.put(`http://localhost:3000/todos/${id}`, {
      ...todo,
     
      id: Number(id)  
    })
    navigate("/")
  }
  
  
  }
  return (
    <>
    
   <div style={{ backgroundColor: "rgb(93, 232, 253)", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
  <div  className="container"style={{ backgroundColor: "rgba(25, 53, 74, 1)", width: "1000px", padding: "20px", borderRadius: "10px" }}>
    
      <form  onSubmit={handelSubmit} >
  <div className="mb-4 " >
    <label htmlFor="title" className="form-label " ></label>
    <input type="text" className="form-control" id="title"  name="title" value={todo.title} onChange={handelChange} />
   
   
    <div className='d-flex align-items-center justify-content-center gap-3'>
       <button type="submit"  className="btn mt-5" 
        style={{ backgroundColor: "rgb(93, 232, 253)", fontWeight: "bold",width:"25%"}}> edit Todos</button>
     <button   className="btn mt-5 "
        style={{ backgroundColor: "rgb(93, 232, 253)", fontWeight: "bold",width:"25%"}}  onClick={ redirectToTodos}
> back to Todos</button>
    </div>
    
   
  </div>



</form>
</div>
</div>
    </>
  )
}

export default Edit

