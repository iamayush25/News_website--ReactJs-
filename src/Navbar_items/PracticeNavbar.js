import React from 'react'
import { BrowserRouter , Routes, Route , Link } from 'react-router-dom';
import ContactUS from './ContectUs';


function PracticeNavbar() {
    return (
        <div>
            <div className='navbar'>

                <img id='img' src="https://as1.ftcdn.net/v2/jpg/05/08/06/18/1000_F_508061840_q3zH1Z4MbgGlWM5oaJmVJTuDxoOmxN3n.jpg" alt="news logo" />

                <div id='inputBTN'>
                    <BrowserRouter>

                        <Link to="/contact" > Contact </Link>
                        <br />
                        <Link to="/" > Home </Link>
                        <Routes>
                            <Route path='/contact'  element={<ContactUS/>} />
                            <Route path='/' element={"Welcome"} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    )
}

export default PracticeNavbar
