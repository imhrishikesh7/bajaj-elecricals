import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Board.css";
import Heading from "../Heading/Heading";

const Board = () => {
    const bgRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const bgElement = bgRef.current;
        const cardElements = cardRefs.current;

        const growAnimation = (element) => {
            gsap.to(element, {
                duration: 0.5,
                scale: 1.1, // Increase scale by 10%
                ease: "power2.out",
            });
        };

        const shrinkAnimation = (element) => {
            gsap.to(element, {
                duration: 0.5,
                scale: 1, // Restore original scale
                ease: "power2.out",
            });
        };

        const onMouseEnterHandler = () => {
            gsap.to(bgElement, {
                duration: 0.5,
                backgroundColor: "#0d68c9",
            });
            cardElements.forEach(cardElement => growAnimation(cardElement));
        };

        const onMouseLeaveHandler = () => {
            gsap.to(bgElement, {
                duration: 0.5,
                backgroundColor: "transparent",
            });
            cardElements.forEach(cardElement => shrinkAnimation(cardElement));
        };

        bgElement.addEventListener("mouseenter", onMouseEnterHandler);
        bgElement.addEventListener("mouseleave", onMouseLeaveHandler);

        return () => {
            bgElement.removeEventListener("mouseenter", onMouseEnterHandler);
            bgElement.removeEventListener("mouseleave", onMouseLeaveHandler);
        };
    }, []);

    return (
        <>
            <Heading className='poppins-bold' heading={'Board of Directors'} />

            <div className='board-container flex' ref={bgRef}>
                <div className="card-board" ref={el => cardRefs.current[0] = el}>
                    <img src="./manager.png" alt="" />
                    <h6 className="poppins-bold">SHEKHAR BAJAJ</h6>
                    <p className="poppins-light ">CHAIRMAN</p>
                    <p className="quote">At Bajaj Electricals, we're not just crafting appliances; we're shaping lifestyles and fostering connections that span generations. Join us in our pursuit of excellence, where every career is a canvas for creativity, innovation, and meaningful impact. Together, let's redefine the essence of home living and inspire the world.</p>
                </div>
                <div className="card-board" ref={el => cardRefs.current[1] = el}>
                    <img src="./director.png" alt="" />
                    <h6 className="poppins-bold">ANUJ PODDAR</h6>
                    <p className="poppins-light ">MANAGING DIRECTOR & CEO</p>
                    <p className="quote">Our winning culture is our cornerstone, fostering an environment where every team member is empowered to innovate, collaborate, and grow. We're more than just a workplace; we're a community of growth seekers and innovators. Here, every voice matters, every idea counts, and every individual is valued.</p>
                </div>
            </div>
        </>
    );
};

export default Board;
