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
    const [ videos, setVideos ] = useState({
        mylist: [], trends: [], originals: []
    });

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

            {videos.mylist.length > 0 &&
                <Categories tlitle="Mi Lista">
                    <Carousel>
                        <CarouselItems />
                    </Carousel>
                </Categories>
            }


            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends.map( item => 
                        <CarouselItems key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>


            <Categories title="Originales de Plazi Video">
                <Carousel>
                    {videos.originals.map( item => 
                        <CarouselItems key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    );
}

export default App