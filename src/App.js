import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';
import AddForm from './components/AddForm';

function App() {
  
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
    <div className='container text-center bg-success' >      
        
           
      <div className='row'>
        <h1>LISTA DE LA COMPRA</h1> 
      
        <div className='col-12 col-sm-4'>
        <AddTask setProduct={setProduct} setUnit={setUnit} AddProduct={AddProduct} 
        FinalEdition={FinalEdition} modeEdition={modeEdition} product={product} unit={unit} 
        />
        </div>

        <div className='col-12 col-sm-8'>
        <AddForm DeleteList={DeleteList} FirstEdition={FirstEdition} list={list}
        />
        </div>

      </div>    
    </div>
  )
}

export default App;
