import React, { Component } from 'react'
import './Footer.css'
import {Container,Row} from 'react-bootstrap'
import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa'
import applestore from '../assets/images/applestore.png'
import playstore from '../assets/images/playstore.png'
import microsoftstore from '../assets/images/microsoftstore.png'
import {Link} from 'react-router-dom';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <Container>
                    <Row>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="sitemap-links">
                            <Link to={"/"}> Home</Link> |
                                <Link to={"/"}> Terms and Conditions</Link> | 
                                <Link to={"/"}> Privacy Policy</Link> | 
                                <Link to={"/"}> Collection Statement</Link> | 
                                <Link to={"/"}> Help</Link> | 
                                <Link to={"/"}> Manage Account</Link> 
                                <p>Copyright @2016 DEMO Streaming. All rights Reserved</p>
                            </div> 
                        </div>
                    </Row>
                    <Row>
                        <div className="col-lg-6 col-md-6 col-sm-6 text-left">
                            <div className="social-icons">
                            <button className="btn social-btn"><FaFacebookF /></button>
                            <button className="btn social-btn"><FaTwitter /></button>
                            <button className="btn social-btn"><FaInstagram /></button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 text-right">
                            <div className="footer-btns">
                            <Link to={"/"}> <img src={applestore} alt="icons"></img> </Link>
                            <Link to={"/"}> <img src={playstore} alt="icons"></img> </Link>
                            <Link to={"/"}> <img src={microsoftstore} alt="icons"></img></Link>
                            </div>
                        </div>
                    </Row>
                    </Container>
                </div> 
            </div>
        )
    }
}
