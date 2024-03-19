import React from 'react'
import ReactPlayer from 'react-player';
import './Intro.css';

const Intro = () => {
    return (
        <div className='intro-container flex'>
                <ReactPlayer 
                    url="<https://youtu.be/lw36x_XDzB4?si=Pf11TI_zCHAdFpGg>"
                    width="49%"
                    height="350px"
                    controls
                    playing={true}
                    // autoPlay={true}
                    />
            <div className="intro-wrapper">
                <div className='intro2'>
                <h1 className='poppins-bold'>Advanced <br />Electrical <br />Solutions</h1>
                <p className='poppins-medium intro-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos ad quidem corporis dolor adipisci! Nobis molestias animi cum? Voluptates ratione nihil molestias rem quos distinctio aperiam dolorum dolore ut. <br /> 
                </p>
                    <a className='poppins-semibold' href="/">Explore</a>
                    </div>
            </div>

        </div>
    )
}

export default Intro