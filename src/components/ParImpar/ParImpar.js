import React, { useState } from 'react'
import { Layout } from '../Layout';

export const ParImpar = () => {
    const [num1, setNum1] = useState(0);    
    const [result, setResult] = useState("");

    const handlePoP=() => {
        
        //Reto: en vez de if utiliza el ? para devolver el mensaje de manera mas resumida
        if (num1%2===0){            
            setResult('par ');          
           }          
           else{
            setResult('impar ');
            }        
      }
    return (
        <Layout>
            <div className="containerNOP">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1>Ejemplo calculando numero par o impar React</h1>                
                {result.length>0 && (
                                    <h4>El numero introducido es: 
                                          <p className="lead">
                                              {result}
                                          </p>
                                    </h4>)}
            </div>
            <div className="mb-3">
                <label className="form-label">Ingresar Numero</label>
                <input type="text" name="num1" value={num1} onChange={(event) => { setNum1(Number(event.target.value));setResult('') }}
                className="form-control" placeholder="Ingresar numero"/>
            </div>            
            <div className="mb-3">                
                <button className="btn btn-primary"
                onClick={() => handlePoP()}
                >
                    Calcular
                </button>
            </div>
            <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
            </div>
        </Layout>
    )
}
