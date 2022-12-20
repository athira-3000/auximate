import React from 'react';
import '../css/popUp.css';
import Button from '@mui/material/Button';
function PopUp(props){
    const openNew=()=>{
        console.log('opened');
        const url="./LoginHomeCustomer.js";
        window.open(url,'_self');
    }
    return(props.trigger)?(
    <div className="popUp">
       <div className="popUpInner">
            <Button variant="contained" class="closeBtn" onClick={()=>props.setTrigger(false)}>Close</Button>
            <h4>Customer Sign Up</h4>
            <form >
                <label name="Name" >Name: </label>
                <input type="text" name="Name" placeholder="Enter Your Name"/>
                <br/>
                <label name="phoneNo" >Phone Number: </label>
                <input type="text" name="phoneNo" placeholder="Enter Your Phone Number"/>
                <br/>
                <label name="email" >Email: </label>
                <input type="text" name="email" placeholder="Enter Your e-mail id"/>
                <br/>
                <Button variant="outlined" onClick={openNew}>Submit</Button>
            </form>
        </div>
    </div>
    ):"";
}
export default PopUp;