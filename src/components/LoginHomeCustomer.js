import React from 'react';
import NavBar from './NavBar';
function LoginHomeCustomer(){

    return(
        <div className="body">
            <NavBar option1="pass 1" option2="pass 2"/>
            <div className="flexContainer contentHome">
                <div className="flexItem">
                    <div className="optionsCustomer"><h3>Book now</h3></div>
                    <div className="optionsCustomer"><h3>Your trips</h3></div>
                </div>
                <div className="flexItem">
                    <div className="optionsCustomer"><h3>Cancel Ticket</h3></div>
                    <div className="optionsCustomer"><h3>Explore</h3></div>
                </div>
            </div>
        </div>
        
    );
}
export default LoginHomeCustomer;