import React from 'react';
import { navigate, Link } from '@reach/router';
import Login from '../Components/LoginUser';
import Register from '../Components/RegisterUser';
import {Button} from '@material-ui/core';


const LogReg = () => {

    return (
    
        <div>
        <Register/>
        <hr/>
        <Login/>
        <div>
            <Button onClick={ ()=> navigate("/pirates") }></Button>
        </div>
        </div>
    )
}
export default LogReg;