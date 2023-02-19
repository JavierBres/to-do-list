import React from 'react'
import { BsFillEraserFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const AddForm = ({list, FirstEdition, DeleteList}) => {
    
  return (
    <div>
        <h2>Listado de productos</h2>
        <hr />
        <ul className='list-group'>
            {
                list.map(i => (
                    <li key={i.id} className='list-group-item bg-info'>
                        {i.product}  {i.unit} unidades
                        <button onClick={() => FirstEdition(i)} 
                        className='btn btn-sm btn-primary float-right me-md-2'><AiFillEdit />
                        </button>
                        <button onClick={() => DeleteList(i.product)} 
                        className='btn btn-sm btn-primary float-right'><BsFillEraserFill />
                        </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
export default AddForm