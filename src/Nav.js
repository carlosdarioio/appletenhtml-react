import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                      <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <Link className="nav-link active" to="/" aria-current="page">
                            <i className="fa fa-home"></i>
                               Body start
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/suma">
                              <i className="fa fa-plus"></i> 
                              Suma
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/paroimpar">
                              <i className="fa fa-circle"></i> 
                              Par o impar
                            </Link>
                          </li>         
                          <li className="nav-item">
                            <Link className="nav-link" to="/yearbisiesto">
                              <i className="fa fa-calendar"></i> 
                              Año bisiesto
                            </Link>
                          </li>         
                          <li className="nav-item">
                            <Link className="nav-link" to="/suma">
                              <i className="fa fa-plus"></i> 
                              Potencia x auqi vas
                            </Link>
                          </li>         
                          <li className="nav-item">
                            <Link className="nav-link" to="/suma">
                              <i className="fa fa-plus"></i> 
                              Get from api
                            </Link>
                          </li>         
                          <li className="nav-item">
                            <Link className="nav-link" to="/suma">
                              <i className="fa fa-plus"></i> 
                              CRUD Users
                            </Link>
                          </li>         
                        </ul>
                
                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                          <span>Otros</span>
                          <a className="link-secondary" href="#" aria-label="Add a new report">
                            <span data-feather="plus-circle"></span>
                          </a>
                        </h6>
                        <ul className="nav flex-column mb-2">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <span data-feather="file-text"></span>
                              Current month
                            </a>
                          </li>          
                        </ul>
                      </div>
                    </nav>
        </>
    )
}