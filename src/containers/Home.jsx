import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItems from '../components/CarouselItems';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
    const videos = useInitialState(API);

    return( 
        <React.Fragment>
            <Search></Search>

            {videos.mylist.length > 0 &&
                <Categories tlitle="Mi Lista">
                    <Carousel>
                        {videos.mylist.map( item =>
                            <CarouselItems key={item.id} {...item}/>
                        )}
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

        </React.Fragment>
    );
}

export default Home;