import React, { useState } from 'react'
import { Layout } from '../Layout'

export const Suma = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleClick=() => {
        setResult((num1+num2));
      }

    return (
        <Layout>
            <div className="containerNOP">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1>Ejemplo de suma Read</h1>
                {result>0 && (<h2>Resultado: <small>{result}</small></h2>)}
            </div>
            <div className="mb-3">
                <label className="form-label">Primer Numero</label>
                <input 
                type="number" 
                name="num1" 
                value={num1} 
                onChange={(event) => { setNum1(Number(event.target.value)) }}
                className="form-control" 
                placeholder="Ingresar numero"
                />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Segundo Numero</label>
                <input type="number" 
                name="num1" value={num2} 
                onChange={(event) => { setNum2(Number(event.target.value)) }}
                className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
            </div>
            <div className="mb-3">                
                <button className="btn btn-primary"
                onClick={() => handleClick()}
                >
                    Sumar
                </button>
            </div>
            <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
            </div>
        </Layout>
    )
}
