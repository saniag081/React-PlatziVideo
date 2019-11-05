import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItems from '../components/CarouselItems';
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initalState';

const Home = ({ myList, trends, originals }) => {
    // const videos = useInitialState(API);
    return( 
        <React.Fragment>
            <Search></Search>

            {myList.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {myList.map( item =>
                            <CarouselItems key={item.id} {...item}/>
                        )}
                    </Carousel>
                </Categories>
            }


            <Categories title="Tendencias">
                <Carousel>
                    {trends.map( item => 
                        <CarouselItems key={item.id} {...item}/>
                    )}
                </Carousel>
            </Categories>


            <Categories title="Originales de Plazi Video">
                <Carousel>
                    {originals.map( item => 
                        <CarouselItems key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>

        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return{
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

// export default connet(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);