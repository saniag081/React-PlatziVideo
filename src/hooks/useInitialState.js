import { useState, useEffect} from 'react';

const useInitialState = (API) => {
    //state
    const [ videos, setVideos ] = useState({
        mylist: [], trends: [], originals: []
    });

    //consumir API
    useEffect( () => {
        fetch(API)
            .then(response => response.json())
            .then( data => setVideos(data));
    },[]);
    //^ escuchar propiedad que pueda cambiar
    return videos;
}

export default useInitialState;