import React from 'react'
import './Movies.css'
import Mycard from '../Content/Mycard'
import {Container,Row} from 'react-bootstrap'
import data from './../sample.json'
import { FaArrowLeft } from "react-icons/fa"
import {Link} from 'react-router-dom'


// Sort Function A-Z Ordering 
var sorted = data.entries.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    }  
    if (a.title < b.title) {
      return -1;
    }
    console.log(sorted);
    return 0;
  });
// Sort Function A-Z Ordering

// Fetching Data from JSON File & Filter data
const fetchMovies = ()=>{
    var counter =0;
    const movies = data.entries.filter((movie)=>{   
        if(counter<21){
            if(movie.releaseYear>=2010 && movie.programType==="movie"){
                counter++
                return true
            }
        }
        return null
    })
    return movies
}
// Fetching Data from JSON File & Filter data


// Generating View from Fetched Object
const Movies = (props) => {
    const movies = fetchMovies()

    if(movies.length >0){
        return(
            <div className="moviepage">
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
                    <p>Total {movies.length} Movies in A-Z Order</p>
                </div>
                <span className="hrline"></span>

                <Container className="movie-container">
                    <Row className="myrow">
                    {movies.map((movie,index)=>{
                        return (<div>
                            <Link to={'/movie.title'}> 
                            <Mycard type={movie.title} imgsrc={movie.images['Poster Art'].url} > </Mycard>
                            </Link>
                        </div>)
                    })}
                    </Row>
                </Container>
            </div>     
        )
    }
}

export default Movies
