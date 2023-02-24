import React from 'react'
import { useSelector } from 'react-redux';

import { actionCreators } from './state';

const Navbar = () => {

    const amount = useSelector(state => state.amount)
    

    return (

      
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Bank Of Money</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <button disable={true} className="btn btn-outline-success me-2" type="button">Your Balance: {amount}</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
