import React, { useState } from 'react'
import { Layout } from '../Layout';

export const Bisiesto = () => {
    const [num1, setNum1] = useState(0);    
    const [result, setResult] = useState("");
    
    const formatter = new Intl.NumberFormat("en-US", 'percent');
    const ceroPorcent=formatter.format(0);   

    const handlePoP=() => {
            
            if (
                (
                    ((formatter.format(num1 / 100))!=ceroPorcent)&&((num1%4)==ceroPorcent)
                )
                ||
                (formatter.format(num1 / 400)==ceroPorcent)
                )
                {
            setResult('El año es bisiesto ');          
           }          
           else{
            setResult('El año no es bisiesto ');
            }        
      }
    return (
        <Layout>
            <div className="containerNOP">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                
                <h1>Calculando Año bisiesto</h1>
                
                {result.length>0 && 
                    (
                        <h4>
                            Resultado({num1}): 
                                <small className="lead">
                                        {result}
                                </small>
                        </h4>
                    )
                }
            </div>
            <div className="mb-3">
                <label className="form-label">Ingresar numero</label>
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
