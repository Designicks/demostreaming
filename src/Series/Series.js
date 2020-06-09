import React from 'react'
import './Series.css'
import Mycard from '../Content/Mycard'
import {Container,Row} from 'react-bootstrap'
import data from './../sample.json'
import { FaArrowLeft } from "react-icons/fa"
import {Link} from 'react-router-dom'

// Fetching Data from JSON File & Filter data
const fetchSeries = ()=>{
    var counter =0;
        const series = data.entries.filter((serie)=>{
            if(counter<21){
                if(serie.releaseYear>=2010 && serie.programType==="series"){
                    counter++
                    return true
                }
                else{
                    return false
                }
            }
            return null
        })
        return series
}
// Fetching Data from JSON File & Filter data


// Generating View from Fetched Object
const Series = () => {

    const series = fetchSeries()

    if(series.length >0){
        return(
            <div className="seriespage">
                <div className="content-full">
                    <Container>
                        <div className="content-top">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                            <h5 className="title">Popular Movies</h5>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="topStatus clearfix container">
                    <Link to={"/"}> <div><FaArrowLeft /></div> </Link>
                    <p>Total {series.length} Movies in A-Z Order</p>
                </div>
                <span className="hrline"></span>

                <Container className="movie-container">
                    <Row className="myrow">
                    {series.map((serie,index)=>{
                        return (<div>
                            <Link to={'/serie.title'}>
                            <Mycard type={serie.title} imgsrc={serie.images['Poster Art'].url} > </Mycard>
                            </Link>
                                </div>)
                    })}
                    </Row>
                </Container>     
            </div>      
        )
    }
}

export default Series
