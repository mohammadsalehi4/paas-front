import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
    
        <footer id="myFooter">
                <a id="logo" href="/"> Pas </a>
                <div className="middle">
                    <p className="h55">CopyRighted by Mohammad Salehi</p>
                </div>

                <div className="beside">
                    <div className="social-networks">
                        <a href="/" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="/" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="/" className="telegram"><i className="fa fa-telegram"></i></a>
                    </div>
                </div>
                <div className="middle1">
                    <p className="h45">In addition to the password, you will need the code </p>
                    <p className="h45">that the application generates on your account.</p>
                </div>
                <div className="middle1">
                    <p className="h55">CopyRighted by Mohammad Salehi</p>
                </div>
    </footer>
    )
}

export default Footer
