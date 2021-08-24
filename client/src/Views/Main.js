import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PirateList from '../Components/PirateList';

const Main = () => {
    const [pirates, setPirates] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
        .then(res => {
            setPirates(res.data);
            setLoaded(true);
        });
    }, [pirates])

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id!== pirateId));
    }

    // const styles = {
    //     p:{
    //         marginRight:1280,
    //         fontSize:"larger"
    //     },
    //     h2: {
    //         marginRight:870
    //     }
    // }
    return (
        <div>
            { loaded && <PirateList pirates={pirates} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;