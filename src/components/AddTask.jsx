import React from 'react'

const AddTask = (props) => {

  return (
    
      <div className='row align-items-start'>

      <div className='col'>
        <h2>Tasks' list</h2>
          <form className='form-group'>            
          <input onChange={(event) => {props.setTask(event.target.value)}} 
          type="text" className='placeholder bg-info' placeholder="To add task..." />            
          </form>

      <div>
        <p>Tasks</p>   
    
      </div>

      </div>

      <div className='col'>
        <h2>List of task's type</h2>
          <form className='form-group'>            
          <input onChange={(event) => {props.setType(event.target.value)}} 
          type="text" className='placeholder bg-info' placeholder="To add type's task...." />
          </form>
        <p>Types</p>
      </div>      
            
    </div>
  )
}

export default AddTask