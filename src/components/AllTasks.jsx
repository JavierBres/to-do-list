import React, {useState} from 'react'
import { BsFillEraserFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const AllTasks = () => {
    
    const [product, setProduct] = useState("")
    const [unit, setUnit] = useState("")
    const [list, setList] = useState([])
    const [modeEdition, setModeEdition] = useState(false)

    const AddProduct = (e) => {
        e.preventDefault()
        if(product.length === 0 || unit.length === 0) {
            alert("Añade un producto y unidad/es")            
            return
        }          
      
          const prod = {
            id: Date.now(),
            product: product,
            unit: unit,
            isdone: false
          }
          setList([...list, prod])
          setProduct("")
          setUnit("")
    }
    
    const DeleteList = (deleteItem) => {
        const filtered = list.filter(item => item.product !== deleteItem)
        setList(filtered)              
    }
    
    const FirstEdition = (obj) => {
        setProduct(obj.product)
        setUnit(obj.unit)
        setModeEdition(true)
    }

    const FinalEdition = (e) => {
        e.preventDefault()
        const edited = list.map(item => item.product === product ? {product, unit} : item)        
        setList(edited)
        setModeEdition(false)
        setProduct("")
        setUnit("")
    }

  return (
    <div className='row'>

        <div className='col-12 col-sm-8'>
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
        <div className='col-12 col-sm-4'>
            <h2>Formulario de lista de la compra</h2>
            <hr />
            
            <form className='form-group'>
                <input onChange={(e) => {setProduct(e.target.value)}} 
                className='form-control mb-2 bg-warning' type="text" autoFocus placeholder="Introduce producto" 
                value={product} />
                <input onChange={(e) => {setUnit(e.target.value)}} 
                className='form-control mb-2 bg-warning' type="number" placeholder="Introduce unidad" 
                value={unit} />
                {
                    modeEdition ? (
                        <button  onClick={(e) => {FinalEdition(e)}} 
                        className='btn btn-info btn-block' type="submit">EDITAR</button>
                    ) :
                    (
                        <button onClick={(e) => {AddProduct(e)}} 
                        className='btn btn-info btn-block' type="submit">AGREGAR</button>
                    )
                }                

            </form>
        </div>

    </div>
  )
}

export default AllTasks