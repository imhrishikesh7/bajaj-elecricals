import React, { useState } from 'react';
import './Boxes.css';
// import '../Footer/Footer.css'

const Boxes = () => {
    const [activeBox, setActiveBox] = useState(null);

    const handleBoxHover = (index) => {
        setActiveBox(index);
    };

    const handleBoxLeave = () => {
        setActiveBox(null);
    };

    const boxes = [
        { id: 1, title: 'About us', content: 'Our businesses are spread across Consumer Appliances and Lighting Solutions'},
        { id: 2, title: 'Product support', content: 'Our businesses are spread across Consumer Appliances and Lighting Solutions',},
        { id: 3, title: 'Register your appliance', content: 'Our businesses are spread across Consumer Appliances and Lighting Solutions',},
        { id: 4, title: 'Contact us', content: 'Our businesses are spread across Consumer Appliances and Lighting Solutions',},
    ];

    return (
        <div className='boxes'>
            <div className="container-boxes">
                {boxes.map((box, index) => (
                    <div
                        key={box.id}
                        className={`box ${activeBox === index ? 'active' : ''}`}
                        onMouseEnter={() => handleBoxHover(index)}
                        onMouseLeave={handleBoxLeave}
                    >
                        {activeBox === index && <img src='./cta-arrow-blue.svg' alt={`Image for ${box.title}`} />}
                        <h6 className='inter-bold'>{box.title}</h6>
                        <p className={activeBox === index ? 'show' : 'hide'}>{box.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Boxes;


// import React from 'react';
// import './styles.css'; // Import the CSS file

// const Boxes = () => {
//   return (
//     <div className="container">
//       <div id="marketing" className="section">
//         <div className="content">
//           <h1>Marketing</h1>
//         </div>
//         <div className="overlay">
//           <p>Marketing text</p> {/* Paragraph content */}
//         </div>
//       </div>
//       <div id="technology" className="section">
//         <div className="content">
//           <h1>Technology</h1>
//         </div>
//         <div className="overlay">
//           <p>Technology text</p> {/* Paragraph content */}
//         </div>
//       </div>
//       <div id="advertising" className="section">
//         <div className="content">
//           <h1>Advertising</h1>
//         </div>
//         <div className="overlay">
//           <p>Advertising text</p> {/* Paragraph content */}
//         </div>
//       </div>
//       <div id="advertising" className="section">
//         <div className="content">
//           <h1>Advertising</h1>
//         </div>
//         <div className="overlay">
//           <p>Advertising text</p> {/* Paragraph content */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Boxes;

