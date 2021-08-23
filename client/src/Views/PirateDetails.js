import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Paper } from '@material-ui/core';
import { Button } from 'reactstrap';
import DeleteButton from '../Components/DeleteButton';

const Details = (props) => {
    const { _id } = props; 
    const [pirate, setPirate] = useState({});
    const [currentPirate, setCurrentPirate] = useState("");
    const [errors, setErrors] = useState();


    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + props.id,
        )
        .then(res => setPirate({
            ...res.data,
        }))
        .catch(err => {console.log(err)});
    }, [])


    const styles = {
        paper: {
            width: "50rem", padding: "1rem",
            marginLeft:320,
            marginTop:5
        },
        h1: {
            display:"inline-block",
            marginRight:510
        },
        h2: {
            display:"inline-block",
            marginRight:430
        },
        Link: {
            marginLeft:-10
        },
        top:{
            display:"inline-block"
        },
        about:{
            display:"inline-block"
        }
    }
    return (
        <div>
            <h1 style={{marginTop:50}}>{pirate.name}</h1>
            <Paper elevation={3} style={styles.paper}>
            <div className="top" style={styles.top}>
            <h2>Pirate Image: <img  style={{width:"15%",height:"20%"}} src={pirate.imageUrl} alt="pirate"/></h2>
            <p>Catch Phrase: <strong>"{pirate.phrase}"</strong></p>
            </div>
            <div className="about" styles={styles.about}>
            <h2>About</h2>
            <p>Position: <strong>{pirate.position}</strong></p>
            <p>Treasures: <strong>{pirate.number}</strong></p>
            <p>Peg Leg: <strong>{pirate.pegleg ? 'Yes': 'No'}</strong></p><br/>
            <p>Eye Patch: <strong>{pirate.eyepatch ? 'Yes' : 'No' }</strong></p><br/>
            <p>Hook Hand: <strong>{pirate.hookhand ? 'Yes' : 'No'}</strong></p>
            </div>
            </Paper><br/>
            <Button href="/pirates" color="primary">&#8678; Crew Board</Button>
        </div>
    )
}

export default Details;