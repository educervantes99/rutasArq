import { useState, useEffect } from 'react';
import {nodos} from '../../utils/arcos';
import {ggP} from '../../utils/handles/Graphology'
import './Inputs.css';

export const Inputs = ({answer}) => {

  let o = localStorage.getItem('origen')
  let d = localStorage.getItem('destino')

  const [origen, setOrigen] = useState(o ?? '')
  const [destino, setDestino] = useState(d ?? '')
  const [path, setPath] = useState([])
  
  useEffect(() => {
   
  }, [origen, destino])
  

    const handleOrigenChange = (e) => {
    setOrigen(e.target.value)
    }

    const handleDestinoChange = (e) => {
        setDestino(e.target.value)
        }
        
    const getPath = () =>{
        let p = ggP(origen,destino); //
        setPath(p);
        answer(p);
        localStorage.setItem('route', p)
        localStorage.setItem('origen', origen)
        localStorage.setItem('destino', destino)
    }
    

  return (
    <div className="inputContainer">
        <p style={{textAlign: 'center'}}>
            <b >Ingresa los valores</b>
        </p>
        
        <p className='label'>Origen: {origen}</p>
        <select onChange={e=> handleOrigenChange(e)} name="origen" id="origen" className='inputSelect'>
          <option selected disabled value={null}>Selecciona</option>
            {nodos.map((item,key)=>
               { return <option key={key} value={item}>{item}</option>}
            )}
        </select>

        <p className='label'>Destino: {destino}</p>
        <select onChange={e=> handleDestinoChange(e)} name="car1s" id="cars1" className='inputSelect'>
          <option selected disabled>Selecciona</option>
            {nodos.map((item,key)=>
               { return <option key={key} value={item}>{item}</option>}
            )}
        </select>

        <button onClick={()=>getPath()} className='inputsButton'>Enviar</button>

    </div>
  )
}
