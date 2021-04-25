import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class Menubar extends Component {
    render () {
        const lang = localStorage.getItem('lang');
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>
                        {
                            lang === 'en' ? 'Agriculture' : 'விவசாயம்'
                        }
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Menubar