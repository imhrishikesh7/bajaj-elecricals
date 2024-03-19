import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="footer-left col-md-4 col-sm-6">
                    <p class="about">
                        <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                        ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                    </p>
                    <div class="icons flex">
                        <a href="#"><img src="./facebook.svg" alt="" /></a>
                        <a href="#"><img src="./instagram.svg" alt="" /></a>
                        <a href="#"><img src="./twitter.svg" alt="" /></a>
                        <a href="#"><img src="./linkedin.svg" alt="" /></a>
                    </div>
                </div>
                <div class="footer-center col-md-4 col-sm-6">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span> Street name and number</span> City, Country</p>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <p> (+00) 0000 000 000</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="#"> office@bajajelectricals.com</a></p>
                    </div>
                </div>
                <div class="footer-right col-md-4 col-sm-6">
                    {/* <h2> Company<span> logo</span></h2> */}
                    <img className='footer-logo' src="./bajaj-logo.png" alt="" />
                    <p class="menu">
                        <a href="#"> Home</a> | 
                        <a href="#">  About</a> | 
                        <a href="#">  Services</a> | 
                        <a href="#">  Portfolio</a> | 
                        <a href="#">  News</a> | 
                        <a href="#">  Contact</a>
                    </p>
                    <p class="name"> Bajaj Electricals &copy; 2024</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer