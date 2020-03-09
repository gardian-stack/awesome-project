import React from 'react';
import './YouTubeComp.css';


const YouTubeComp = (props) => {
    return(
        <div className="container">
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="tittle">{props.tittle}</p>
            <p className="desc">{props.desc}</p>
        </div>
        </div>
    )
}

export default YouTubeComp;