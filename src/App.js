import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Series from './Series/Series';
import Movies from './Movies/Movies';
import Footer from './Footer/Footer';
import { BrowserRouter, Route } from "react-router-dom"
import Notfound from './Notfound/Notfound'

function App() {
    return ( 
      <div className = "App" >
        <BrowserRouter >
        <Header / >
        <Route exact path = "/" component = { Content }/>
        <Route path = "/Series" component = { Series }/>
        <Route path = "/Movies" component = { Movies }/> 
        <Route path = '/movie.title' component = { Notfound }/> 
        <Route path = '/serie.title' component = { Notfound }/> 
        <Footer / >
        </BrowserRouter>
        </div>
    );
}

export default App;