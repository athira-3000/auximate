import React from 'react';
import '../css/slider.css';
import {useState} from 'react';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';
function Slider(props){
    const [current,setCurrent]=useState(0);
    const length=props.slides.length;
    const nextSlide=()=>{
        setCurrent(current===length-1?0:current+1);
    }
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1);
    }
    if(!Array.isArray(props.slides) || length<=0){
        return null;
    }
    return(
        <div className="slider">
            <BsFillArrowLeftCircleFill className="left-arrow" onClick={prevSlide}/>
            <BsFillArrowRightCircleFill className="right-arrow" onClick={nextSlide}/>
            {props.slides.map((slide,index) => {
                return(<div className={index===current?'slide active':'slide'}
                key={index}>
                {index===current && (<img src={slide.urls} className="image"/>)}
                </div>);
            })}
        </div>
    );
}
export default Slider;