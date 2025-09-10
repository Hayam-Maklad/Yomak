import { BrowserRouter, Route, Routes } from "react-router"



import Add from "./Pages/Add"


import Todos from "./pages/Todos"
import Edit from "./Pages/Edit"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      
      
        
       
        <Route path="/" element={<Todos/>}/>
         <Route path="/add" element={<Add/>}/>
         <Route path="/edit/:id" element={<Edit/>}/>
        
       
         
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App