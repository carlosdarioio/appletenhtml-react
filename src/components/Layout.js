import React from 'react'
import { Header } from '../Header';
import { Nav } from '../Nav';

export const Layout = ({ children={} }) => {
    return (
    <React.Fragment>
<div>
    <Header/>
    <div className="container-fluid">
        <div className="row">
            <Nav/>                
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                {children}
            </main>
        </div>
    </div>
</div>
</React.Fragment>
    );
};