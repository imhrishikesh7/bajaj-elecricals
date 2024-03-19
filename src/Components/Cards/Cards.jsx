import React from 'react'
import './Cards.css'
import Heading from '../Heading/Heading'

const Cards = () => {
    return (
        <div className='cards-container'>
            <Heading className='poppins-bold' heading={'Get The Bajaj Edge'}/>
            <h5 className='poppins-medium'>We’re a workplace that enriches your career and supports your journey holistically, so that you can bring your best self to work each day.</h5>
        <div className='edge-container flex'>
            
            <div className="card">
                <div className="card-content">
                <h2 className="card-title">Not just a desk job</h2>
                    <p className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                    </p>
                    <a href="#" className="button">
                        Learn More
                    </a>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h2 className="card-title">Compensation and rewards</h2>
                    <p className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                    </p>
                    <a href="#" className="button">
                        Learn More
                    </a>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h2 className="card-title">Freedom to voice fresh ideas</h2>
                    <p className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
                    </p>
                    <a href="#" className="button">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Cards