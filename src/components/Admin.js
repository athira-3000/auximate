import React from 'react';
import Button from '@mui/material/Button';
import '../css/admin.css';
import {useState} from 'react';
function Admin(){
    const [values,setValues] = useState({adminName:"",pwd:""});
    const handleChange=(e)=>{
        e.preventDefault();

    }
    return(
        <div className="admin-container">   
            <div className="container">
            <h3>Login to access content</h3>
            <form onSubmit={handleChange}>
                <label>Admin Name</label>
                <input type="text" placeholder="Admin Name" name="adminName" value={values[adminName]}/>
                <br/>
                <label>Password</label>
                <input type="password" placeholder="Password" name="pwd" value={values[pwd]}/>
                <br/>
                <Button type="submit" variant="contained">Submit</Button>
            </form>
            </div>    
        </div>   
    );
}
export default Admin;
