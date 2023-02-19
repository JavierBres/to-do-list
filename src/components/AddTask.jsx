import React from 'react'

const AddTask = (props) => {
    
  return (
    <div>
            <h2>Formulario de lista de la compra</h2>
            <hr />
            
            <form className='form-group'>
                <input onChange={(e) => {props.setProduct(e.target.value)}} 
                className='form-control mb-2 bg-warning' type="text" autoFocus placeholder="Introduce producto" 
                value={props.product} />
                <input onChange={(e) => {props.setUnit(e.target.value)}} 
                className='form-control mb-2 bg-warning' type="number" placeholder="Introduce unidad" 
                value={props.unit} />
                {
                    props.modeEdition ? (
                        <button  onClick={(e) => {props.FinalEdition(e)}} 
                        className='btn btn-info btn-block' type="submit">EDITAR</button>
                    ) :
                    (
                        <button onClick={(e) => {props.AddProduct(e)}} 
                        className='btn btn-info btn-block' type="submit">AGREGAR</button>
                    )
                }                

            </form>
    </div>
  )
}

export default AddTask