import React from 'react'
import './Serie_page.css'
import { Container,Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {FaArrowLeft} from "react-icons/fa"



// Fetching exact/clicked Data and rendering 
    
const Serie_page = (props) => {
    const {tile} = props.location.state;
    // console.log(props,"------------");

    return (
        <div>
        <div className="content-full">
        <Container>
        <div className="content-top">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <h5 className="title">{tile.title}</h5>
            </div>
        </div>
        </Container>
        </div>
                <div className="topStatus clearfix container">
                <Link to={"/Series"}> <div className="back-icon"><FaArrowLeft /></div> </Link>
                <Link to={"/"}> <div><FaHome /> </div> </Link>
                <p>Serie Details</p>  
                </div>
                <span className="hrline"></span>
               
        <Container>
             
            
        <div className="movie_detail_cover">
   
            <div className="movie_detail">
                <Row>
    <div className="col-md-4">
            <img src={tile.images['Poster Art'].url} className="movie_img"></img>
    </div>   
    <div className="col-md-8">
            <label>Program Type: {tile.programType}</label>
            <h2>Title: {tile.title}</h2>
            <h6>Release Year: {tile.releaseYear}</h6>
            <span>Series Description:</span>      
            <h6>{tile.description}</h6>
            <button className="btn btn-primary mr-2 mt-2 p-2"> Watch Now</button>
            <button className="btn btn-secondary mt-2 p-2"> Add to Watchlist</button>
    </div>   
                </Row>
            </div>
     
        </div>
        </Container>
        </div>
    )
}

export default Serie_page
