import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper } from '@material-ui/core';
import { Button } from 'reactstrap';

const Details = (props) => {
    const { _id } = props; 
    const [pirate, setPirate] = useState({});


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
            marginTop:5,
            background:"orange"
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
        pic:{
            display:"inline-block",
            width:300
        },
        about:{
            display:"inline-block",
            width:250
        }
    }
    return (
        <div>
            <Paper elevation={3} style={{width:"50rem", marginLeft:320, background:"sienna"}}>
            <h1 style={{marginTop:50}}>{pirate.name}</h1>
            </Paper>
            <Paper elevation={3} style={styles.paper}>
            <div className="pic" style={styles.top}>
            <h2>Pirate Image: <img  style={{width:"15%",height:"20%"}} src={pirate.imageUrl} alt=""/></h2>
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