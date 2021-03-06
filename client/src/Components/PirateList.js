import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Button } from 'reactstrap';
import {  Paper } from '@material-ui/core';
import DeleteButton from './DeleteButton';


const PirateList = (props) => {
    const [pirates, setPirates] = useState();
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
        .then(res => setPirates(res.data));
    }, [])

    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/logout", {

        })
        .then((res) => {
            console.log(res.data);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
        });
    };

    const styles = {
        paper: {
            width: "50rem", padding: "1rem",
            marginLeft:320,
            marginTop:10,
            background:"orange"
        },
        Link: {
            display: "inline-block",
            marginLeft: 670,
            marginRight:5,
            color:"black",
            textDecoration:"none"
        },
        h1:{
            display:"inline-block",
            marginRight:-150,
            marginLeft:300
        },

        button:{
            display:"inline-black",
            marginRight:10,
            marginLeft: 220,
            marginBottom:10
        },

        image:{
            display:"inline-block",
            marginRight:40,
            width:450
        },
        name:{
            display:"inline-block"
        }
    }
    
    return (
    <div>
        <Paper elevation={3} style={{width:"50rem", marginLeft:320, marginTop:20, background:"sienna",paddingRight:5}}>
        <h1 style={styles.h1}>Pirate Crew</h1><Button href="/pirates/new" color="primary" style={styles.button}>&#43; Add Pirate</Button>
        <Button onClick={logout} color="success" style={{marginBottom:10, marginRigt:10}}>&#8722; Logout</Button>
        </Paper>
        {props.pirates.sort((pirate,i) => (pirate.name.toLowerCase() > i.name.toLowerCase()) ? 1 : -1).map((pirate, i) =>{
        return(
            <Paper key={i} elevation={3} style={styles.paper}>
                <div className="image" style={styles.image}>
                    <img style={{width:"15%",height:"20%"}} src={pirate.imageUrl} alt=""></img>
                    <h3>" {pirate.phrase} "</h3>
                </div>
                <div className="name" style={styles.name}>
                <h1>{pirate.name}</h1>
                <Button href={"/pirates/" + pirate._id} color="primary" style={{marginRight:20}}>&#128064; View Pirate</Button>
                <DeleteButton pirateId={pirate._id} successCallback= {() => navigate("/pirates")}></DeleteButton>
                </div>
            </Paper>
        )
        })}
    </div>
    )
} 
export default PirateList;