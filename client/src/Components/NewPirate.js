import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import { FormGroup, Button,
        Label, Input
    } from 'reactstrap';
import { Paper, 
    FormControl, 
    InputLabel, 
    OutlinedInput,
    FormControlLabel,
    Checkbox, FormLabel,
    Select, MenuItem
    } from '@material-ui/core';

const PirateForm = (props) => {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("")
    const [number, setNumber] = useState();
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [pegleg, setPegleg] = useState(true);
    const [eyepatch, setEyepatch] = useState(true);
    const [hookhand, setHookhand] = useState(true);
    // const [attribute, setAttribute] = useState([]);
    const [state, setState] = useState();
    const [errors, setErrors] = useState([]);

    // const positions = [
    //     'Captain',
    //     'First Mate',
    //     'Quarter Master',
    //     'Sailing Master',
    //     'Gunner',
    //     'Boatswain'
    // ]
    // const [position, setSelectedPosition] = useState(positions[2]);

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        };
    
        const error = [eyepatch, hookhand, pegleg].filter((v) => v).length !== 2;
    
    const onSubmitHandler = (u, data) => {

        u.preventDefault();
        axios.post('http://localhost:8000/api/pirates/new', {
            name, imageUrl, 
            number, phrase, 
            position, pegleg,
            eyepatch, hookhand
        })
            .then(() => navigate('/pirates'))
            .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);

        })

    };
    
    


    const styles = {
        paper: {
            width: "40rem", padding: "1rem",
            marginLeft:380,
        },
        input: {
            marginBottom: "1rem",
            width:"25rem"
        },
        button: {
            marginRight:-180,
            marginBottom:10,
        },
        Link: {
            marginRight:10,
            marginTop: 30
        },
        h1: {
            display:"inline-Block",
            marginTop:20
        },
        p: {
            marginLeft:490
        }

    }
    return (
        <>
        <h1 style={{display:"inline-block",marginRight:100}}>Add Pirate</h1>
        <Button style={styles.button} href="/pirates" color="primary">&#8678; Crew Board</Button>
        <Paper elevation={3} style={styles.paper}>
            <h1>&#9760;Pirate Form&#9760;</h1>
            <form onSubmit = {onSubmitHandler}>
            {errors.map((err,i) =>{return (<p key={i}>{err}</p>)
            })}
                <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                    <InputLabel >Name: </InputLabel>
                    {/* <p className="text-danger"><strong>{props.name < 3 && nameError ? "Name must be at least 3 characters" : ""}</strong></p> */}
                    <OutlinedInput type="text" name="name" 
                    value={name} onChange={(e)=>setName(e.target.value)} color="secondary"/>
                    </FormControl><br/>

                    <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                    <InputLabel>Image URL: </InputLabel>
                    <OutlinedInput type="text" name="imageUrl"
                    value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} color="secondary"/>
                    </FormControl><br/>

                    <FormControl variant="outlined" size="small" style={styles.input} errors="true">
                    <InputLabel>Number of Chest: </InputLabel>
                    <OutlinedInput type="number" name="number"
                    value={number} onChange={(e)=>setNumber(e.target.value)} color="secondary"/>
                    </FormControl><br/>

                    <FormControl variant="outlined" size="small" style={styles.input}>
                    <InputLabel htmlFor={errors}>Catch Phrase: </InputLabel>
                    <OutlinedInput type="text" name="phrase"
                    value={phrase} onChange={(e)=>setPhrase(e.target.value)} color="secondary"/>
                    </FormControl><br/>


                    <FormGroup>
                    <Label for="position">Position: </Label>
                    <Input style={{width:200, marginLeft:210}} type="select" name="position" id="position"
                        onChange={e => setPosition(e.target.value)} multiple>
                            <option value="Captain">Captain</option>
                            <option value="Gunner">Gunner</option>
                            <option value="First Mate">First Mate</option>
                            <option value="Quarter Master">Quarter Master</option>
                            <option value="Sailing Master">Sailing Master</option>
                            <option value="Boatswain">Boatswain</option>
                    </Input>
                    </FormGroup><br/>

                    <FormControl required error={error} component="fieldset">
                    <FormLabel component="legend">Pick two</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={pegleg} onChange={e => setPegleg(e.target.checked)} name="pegleg" />}
                        label="Peg Leg"
                        />
                    <FormControlLabel
                    control={<Checkbox checked={eyepatch} onChange={e => setEyepatch(e.target.checked)}f name="eyepatch" />}
                    label="Eye Patch"
                    />
                    <FormControlLabel
                    control={<Checkbox checked={hookhand} onChange={e => setHookhand(e.target.checked)} name="hookhand" />}
                    label="Hook Hand"
                        />
                    </FormGroup>
                    </FormControl><br/>

                <Button type="submit" variant="contained" color="primary">
                &#43; Add Pirate
                </Button>
            </form>
        </Paper>
    </>
    )
}
export default PirateForm;