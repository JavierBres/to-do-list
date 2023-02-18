import React from 'react'

const BtnForm = ({AddAll}) => {

  return (

    <div className="d-grid gap-2">
        <button onClick={(event) => {AddAll(event)}} type="submit" 
        className='btn btn-primary'>
        Add task and type</button>
    </div>
  
  )
}

export default BtnForm