import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Header } from '../../Header'
import { Nav } from '../../Nav'
import { Layout } from '../Layout'

export const Home = () => {
    return (
        <Layout>
            <div className="containerNOP">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Cuerpo inicial</h1>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Example label</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Another label</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
            </div>
            <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
            </div>
        </Layout>
    )
}
