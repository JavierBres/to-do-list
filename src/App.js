import './App.css';
import { useState } from 'react';
import AddForm from './components/AddForm';
import AddTask from './components/AddTask';
import BtnForm from './components/BtnForm';
import Usuarios from './components/Usuarios';

function App() {

  const [task, setTask] = useState("")
  const [type, setType] = useState("")    
  const [addAll, setAddAll] = useState([])
  
  const AddAll = (event) => {
    event.preventDefault()
    if(task === '' || type === '') {
      alert("Write a task")
      return
    }

    const all = {
      id: Date.now(),
      task: task,
      type: type,
      isdone: true
    }
    setAddAll([...addAll, all])
    setTask("")
    setType("")
  }  

  return (
    <div className='container text-center'>

      <h1>TO-DO LIST</h1>
      <br />
        
        <AddTask setTask={setTask} setType={setType} />
        
        <BtnForm AddAll={AddAll} />

        <hr />

        <AddForm addAll={addAll} setAddAll={setAddAll}
        setTask={setTask} setType={setType} />    

        <Usuarios />    
      
    </div>
  )
}

export default App;
