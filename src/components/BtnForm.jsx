import React from 'react'

const BtnForm = (props) => {
  
  return (

    <div className="d-grid gap-2">
        <button onClick={(event) => {props.AddAll(event)}} type="submit" 
        className='btn btn-primary'>
        Add task and type</button>
    </div>
  
  )
}

export default BtnForm