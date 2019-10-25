import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItems from '../components/CarouselItems';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
    //state
    const [ videos, setVideos ] = useState([]);

    //consumir API
    useEffect( () => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then( data => setVideos(data));
    },[]);
    //^ escuchar propiedad que pueda cambiar

    console.log(videos);

    return( 
        <div className="App">
            <Header></Header>
            <Search></Search>

            <Categories title="Mi Lista">
                <Carousel>
                    <CarouselItems />
                    <CarouselItems />
                    <CarouselItems />
                    <CarouselItems />
                    <CarouselItems />
                    <CarouselItems />
                </Carousel>
            </Categories>


            <Categories title="Tendencias">
                <Carousel>
                    <CarouselItems />
                    <CarouselItems />
                </Carousel>
            </Categories>


            <Categories title="Originales de Plazi Video">
                <Carousel>
                    <CarouselItems />
                </Carousel>
            </Categories>

            <Footer />
        </div>
    );
}

export default App