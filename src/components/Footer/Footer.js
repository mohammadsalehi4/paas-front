import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <footer id="myFooter">
                <a id="logo" href="/"> Pas </a>

                <h5 className="middle">
                    <div className="h55">Get started</div>
                    <ul>
                        <li><a className="grayA" href="/">Home</a></li>
                        <li><a className="grayA" href="/userSignUp">Sign up</a></li>
                        <li><a className="grayA" href="/Description">Description</a></li>
                    </ul>
                </h5>
                <div className="middle">
                    <div className="h55">About us</div>
                    <ul>
                        <li><a className="grayA" href="/">Company Information</a></li>
                        <li><a className="grayA" href="/">Contact us</a></li>
                        <li><a className="grayA" href="/">Reviews</a></li>
                    </ul>
                </div>
                <div className="middle">
                    <div className="h55">Support</div>
                    <ul>
                        <li><a className="grayA" href="/">FAQ</a></li>
                        <li><a className="grayA" href="/">Help desk</a></li>
                        <li><a className="grayA" href="/">Forums</a></li>
                    </ul>
                </div>
                <div className="beside">
                    <div className="social-networks">
                        <a href="/" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="/" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="/" className="telegram"><i className="fa fa-telegram"></i></a>
                    </div>
                    <button type="button" className="btn btn-default">Contact us</button>
        </div>
    </footer>
    )
}

export default Footer
