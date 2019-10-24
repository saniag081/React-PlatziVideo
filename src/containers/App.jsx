import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItems from '../components/CarouselItems';
import '../assets/styles/App.scss';

const App = () => (
    <div className="App">
        <Header></Header>
        <Search></Search>

        <Categories>
            <Carousel>
                <CarouselItems />
                <CarouselItems />
                <CarouselItems />
                <CarouselItems />
            </Carousel>
        </Categories>
    </div>
);

export default App