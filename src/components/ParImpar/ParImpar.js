import React, { useState } from 'react'
import { Layout } from '../Layout';

export const ParImpar = () => {
    const [num1, setNum1] = useState(0);    
    const [result, setResult] = useState("");

    const formatter = new Intl.NumberFormat("en-US", 'percent');
    const ceroPorcent=formatter.format(0);   

    const handlePoP=() => {
        
        if (num1%2===0){
            
            setResult('El numero es par ');          
           }          
           else{
            setResult('El numero es impar ');
            }        
      }
    return (
        <Layout>
            <div className="containerNOP">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <p className="lead">Caluclando Par o impar</p>
                {result.length>0 && (<h4>El numero introducido: <small className="lead">{result}</small></h4>)}
            </div>
            <div className="mb-3">
                <label className="form-label">Ingresar Numero</label>
                <input type="text" name="num1" value={num1} onChange={(event) => { setNum1(Number(event.target.value));setResult('') }}
                className="form-control" placeholder="Example input placeholder"/>
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
