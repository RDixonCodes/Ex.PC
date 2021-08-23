import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Button } from 'reactstrap';

const DeleteButton = (props) => {
    const { pirateId, successCallback } = props;
    const [pirate, setPirate] = useState({});
    const [errors, setErrors] = useState();


    const deletePirate = e => {
        axios.delete('http://localhost:8000/api/pirates/' + pirateId + "/delete",
        {withCredentials: true})
            .then( res =>{ 
                alert("Arrrr, say it ain't so!")
                successCallback();
        }).catch(errors => { console.log(errors)});
    }

    return (
        <Button onClick={deletePirate} color="danger">
            &#128128; Delete &#128128;
        </Button>
    )
}
export default DeleteButton;