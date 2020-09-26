import React from 'react'
import './Notfound.css'
import { Container,Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

const Notfound = () => {
    return (
        <Container>
            <Row>
                <div className="topStatus">
                <Link to={"/"}> <div><FaHome /> </div> </Link>
                    <p>No Data found!</p>
                </div>
            </Row>
        <div className="notfound">
           <h2>Error Code: 404 - Page Not Found!</h2>    
        </div>
        </Container>
    )
}

export default Notfound
