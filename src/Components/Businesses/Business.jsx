import React from 'react'
import './Business.css'

const Business = () => {
    return (
        <div>
            <div className='heading-bar-about flex'>
                <div>
                    <h2 className='inter-medium about-heading2'>Our</h2>
                    <h1 className='inter-bold about-heading'> Businesses</h1>
                </div>
                <p>
                    Bajaj Electricals excels in consumer appliances and lighting <br />solutions. Their business portfolio includes a wide range of <br />innovative products loved by consumers across India.</p>
            </div>
            <div className='flex business-row'>
                <div className='overlay-container'>
                    <img className='business-img' src="./business1.jpg" alt="" />
                    <img className='consumer-icon' src="./consumer-blue.svg" alt="" />
                    <h3 className='consumer-tag inter-bold'>Consumer Products</h3>

                    <div class="overlay">
                    <div class="overlay-text">
                            <img className='icon-mono' src="./nirlep-mono.svg" alt="" />
                            <h4 className='inter-bold'>Consumer Products</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='overlay-container'>
                    <img className='business-img' src="./business2.jpg" alt="" />
                    <img className='consumer-icon' src="./consumer-blue.svg" alt="" />
                    <h3 className='consumer-tag inter-bold' >Nirlep</h3>

                    <div class="overlay">
                    <div class="overlay-text">
                            <img className='icon-mono' src="./nirlep-mono.svg" alt="" />
                            <h4 className='inter-bold'>Nirlep</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex business-row'>
                <div className='overlay-container'>
                    <img className='business-img' src="./business3.jpg" alt="" />
                    <img className='consumer-icon' src="./consumer-blue.svg" alt="" />
                    <h3 className='consumer-tag inter-bold'>Nex</h3>
                    
                    <div class="overlay">
                    <div class="overlay-text">
                            <img className='icon-mono' src="./nirlep-mono.svg" alt="" />
                            <h4 className='inter-bold'>Nex</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='overlay-container'>
                    <img className='business-img' src="./business4.jpg" alt="" />
                    <img className='consumer-icon' src="./consumer-blue.svg" alt="" />
                    <h3 className='consumer-tag inter-bold'>MorphyRichards</h3>
                   
                    <div class="overlay">
                        <div class="overlay-text">
                            <img className='icon-mono' src="./nirlep-mono.svg" alt="" />
                            <h4 className='inter-bold'>MorphyRichards</h4>
                            <p className='inter-light'>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex business-row'>
                <div className='overlay-container5'>
                    <img className='business-img' src="./business5.jpg" alt="" />
                    <img className='consumer-icon' src="./consumer-blue.svg" alt="" />
                    <h3 className='consumer-tag inter-bold'>Lightning Solutions</h3>
                    
                    <div class="overlay5">
                    <div class="overlay-text">
                            <img className='icon-mono' src="./nirlep-mono.svg" alt="" />
                            <h4 className='inter-bold'>Lightning Solutions</h4>
                            <p className='inter-light'></p>
                            <p className='inter-light '>Nirlep Appliances Private Limited introduced Non-Stick technology to India. Over 50 years, it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction. it has become the leading brand in Non-Stick cookware, known for quality and customer satisfaction.</p>
                            <button className='flex ' >Learn more <img className='arrow-right' src="./arrow-right.svg" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business