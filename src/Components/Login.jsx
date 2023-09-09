import React from 'react'
import "./myStyles.css"
import logo from "../Images/chat-box.png"
import { Button, TextField } from '@mui/material'


function Login() {
    return (
        <div className='login-container'>
            <div className="image-container">
                <img src={logo} alt="Logo" className='login-logo' />
            </div>
            <div className="login-box">
                <p className='login-text'>Login to your Account</p>
                <TextField id="standard-basic" label="Enter Username" variant="outlined" />
                <TextField id="standard-basic" label="Enter Password" variant="outlined" type='password' />
                <Button variant='outlined'>Login</Button>
            </div>
        </div>
    )
}

export default Login
