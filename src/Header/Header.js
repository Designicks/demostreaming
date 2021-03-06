import React from 'react'
import './Header.css'
import {Container,Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FiLogIn } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Header = (Props) => {
 return(
   <div className="header-main">
    <div className="header">
      <Container>
        <Row>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"> 
          <div className="head-title">

         <a href="https://designick.com" target="_blank"> <img src="https://designick.com/assets/images/designick_PRO.png"></img> </a>
          
          <Link to={"/"}>
              <button
                className="btn"
                href="index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
              Demo Streaming
              </button>
            </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right">
            <div className="right-nav">
              <button className="btn login-btn"><span><FiLogIn /></span> Login   </button>
              <a href="https://github.com/designicks/"> <button className="btn btn-light trial-btn mr-2"><span><FaGithub /></span> Collab </button> </a>
              <button className="btn btn-dark trial-btn">Start A Free Trial</button>
            </div>
          </div>
        </Row> 
      </Container>
  </div>
 </div>
 )
};

export default Header;