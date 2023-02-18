import React from 'react'
import { BsFillEraserFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const AddForm = ({addAll, setAddAll}) => {

  const DeleteTask = (delet) => {
    const filtered = addAll.filter(item => item.type !== delet)
    setAddAll(filtered)
  }

  return (
    <div>
      <ul className='list-group'>
        { addAll.map((item) => (
            <li key={item.id} className='list-group-item'>
              <h4>Task: {item.task} Type: {item.type}</h4>
              <button className='btn btn-primary me-md-2'><AiFillEdit />
              Edit</button>
              <button onClick={() => DeleteTask(item.type)} className='btn btn-secondary'>
                <BsFillEraserFill />
              Erase</button>                            
            </li>
        )) }
      </ul>
    </div>
  )
}

export default AddForm