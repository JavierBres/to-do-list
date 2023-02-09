import React, { useState } from 'react'

const AllTasks = () => {
    
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
        <div className='row align-items-start'>

        <div className='col'>
            <h2>Tasks' list</h2>
            <form className='form-group'>            
            <input onChange={(event) => {setTask(event.target.value)}} 
            type="text" className='placeholder bg-info' placeholder="To add task..." />            
            </form>

            <div>
            <p>Tasks</p>            

            <hr />

            <ul className='list-group'>
                {
                    addAll.map(item => (
                        <li key={task.id} className='list-group-item'>
                            Task: {item.task} Type: {item.type}
                            <button className='btn btn-primary'>Edit</button>
                            <button className='btn btn-primary'>Erase</button>                            
                        </li>
                     ))
                }
            </ul>
            
            </div>

        </div>

        <div className='col'>
            <h2>List of task's type</h2>
            <form className='form-group'>            
            <input onChange={(event) => {setType(event.target.value)}} 
            type="text" className='placeholder bg-info' placeholder="To add type's task...." />
            </form>
            <p>Types</p>
        </div>

        </div>
            <div className="d-grid gap-2">
                <button onClick={(event) => {AddAll(event)}} type="submit" 
                className='btn btn-primary'>
                Add task and type</button>
            </div>
            
        <hr />       
        
    </div>
  )
}

export default AllTasks