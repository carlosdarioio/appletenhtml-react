import React, { useState } from 'react'
import { Layout } from '../Layout'

export const Potencia = () => {
    const [base, setBase] = useState(0);
    const [exponente, SetExponente] = useState(0);
    const [result, setResult] = useState(0);

    const handlePotencia=() => {
        const r = Math.pow(base,exponente);
        setResult(r);
      }

    return (
        <Layout>
            <div className="containerNOP">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1>Ejemplo calculando Potencia Read</h1>
                {result>0 && (<h2>Resultado: <small>{result}</small></h2>)}
            </div>
            <div className="mb-3">
                <label className="form-label">Base</label>
                <input 
                type="number" 
                name="num1" 
                value={base} 
                onChange={(event) => { setBase(Number(event.target.value)) }}
                className="form-control" 
                placeholder="Example input placeholder"
                />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Exponente</label>
                <input type="number" 
                name="num1" value={exponente} 
                onChange={(event) => { SetExponente(Number(event.target.value)) }}
                className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
            </div>
            <div className="mb-3">                
                <button className="btn btn-primary"
                onClick={() => handlePotencia()}
                >
                    Calcular Potencia
                </button>
            </div>
            <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
            </div>
        </Layout>
    )
}
