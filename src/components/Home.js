import React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import PopUp from './PopUp';
import Slider from './Slider';
import {SliderData} from './SliderData';
function Home(){
    const [buttonPopUp,setButtonPopUp] = useState(false);
    return(
        <div className="content">
            <Slider slides={SliderData}/>
            <Button className="btnSubmit" variant="contained" onClick={()=>setButtonPopUp(true)}>Get Started</Button>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}></PopUp>
        </div>
    );
}
export default Home;

