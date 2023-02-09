import './App.css';
import { useState } from 'react';
import AddForm from './components/AddForm';
import AddTask from './components/AddTask';
import BtnForm from './components/BtnForm';

function App() {

  const [task, setTask] = useState("")
  const [type, setType] = useState("")    
  const [addAll, setAddAll] = useState([])    

  const AddAll = (event) => {
    event.preventDefault()
    const all = {
      task,
       type
    }
    setAddAll([...addAll, all])
  }

  

  return (
    <div className='container text-center'>
           
        
        <AddTask setTask={setTask} setType={setType}/>
        
        <BtnForm AddAll={AddAll} />

        <hr />

        <AddForm addAll={addAll} setAddAll={setAddAll}/>

      
    </div>
  )
}

export default App;
