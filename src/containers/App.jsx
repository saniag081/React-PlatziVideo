import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItems from '../components/CarouselItems';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
    const videos = useInitialState(API);

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