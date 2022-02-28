import React from 'react'
import './Description.css'
const Description = () => {
    return (
        <div className="mainDiv">
            <div id="DescriptionBox">
                <h1 className='Dtitle'>what is Pas?</h1>
                <p className='Dtext'>The purpose of the pas project is to provide more security for the login process on different sites<br/>
                This project provides a dynamic second password service to different sites<br/>
                Sites that use this service, their users must log in to their account and receive a 6-digit dynamic password from the special section of that site.<br/>
                All important information in this service is stored in an encrypted and non-decodable form, and even if the hacker has access to the database, he will not be able to access users' information.<br/>
                For example, the second password service of banks can be mentioned as an example of using a dynamic second password to increase security.<br/>
                This is an early version of the app that does not have some of the features of the original version. In the original version, users will use the mobile app and must confirm their mobile number and email.<br/>
                </p>
                <h1 className='Dtitle'>Instructions</h1>
                <h2 className='Dundertitle'>User Signup</h2>
                <p className='Dtext'>
                Registration is a simple process. To register, users must enter a unique phone number that was not previously registered to other users.<br/>
                Then enter a password of at least 8 digits to complete the registration process.<br/>
                The password must be entered with the site's dedicated keyboard.<br/>
                </p>
                <h2 className='Dundertitle'>Site Signup</h2>
                <p className='Dtext'>
                Site registration is as simple as user registration, and site owners must enter their address, mobile number and password to register. <br/>
                In this section, the mobile number and site address must be unique.<br/>
                </p>
                <h2 className='Dundertitle'>User Login</h2>
                <p className='Dtext'>
                Users must log in with their mobile number and password.<br/>
                Enter the password through the site's dedicated keyboard.<br/>
                If you enter the password incorrectly 3 times, the account will be blocked and must be recovered.<br/>
                </p>
                <h2 className='Dundertitle'>Site Login</h2>
                <p className='Dtext'>
                Sites, like users, log in with their mobile number and password.<br/>
                there is no account dashboard for sites and receive only one token after logging in, which they use to authenticate their users.<br/>
                </p>
                <h2 className='Dundertitle'>Site Dashboard</h2>
                <p className='Dtext'>
                The first part of the dashboard is the password section.<br/>
                Initially, there is no password for the sites and the user will receive a one-time 6-digit password with a validity of one minute upon request. <br/>
                </p>
                <h2 className='Dundertitle'>add users by sites</h2>
                <p className='Dtext'>
                Sites can send an array containing their users' usernames to /Addprevioususers to add their previous users.<br/>
                Also, to add each of their users, send that user name to the /.<br/>
                Whether to add a group or a single add, after sending the user username, a 7-digit code containing numbers and letters is returned, which sites must show to the user so that the user can add the site to his account.<br/>
                </p>
                <h2 className='Dundertitle'>add Site to Account</h2>
                <p className='Dtext'>
                After the user receives the 7-digit code from the desired site, she enters the Add Sites section and enters the site address along with her username on that site and the 7-digit code she received from the same site.<br/>
                If all items are correct, the site will be added.<br/>
                </p>
                <h2 className='Dundertitle'>delete Account</h2>
                <p className='Dtext'>
                The user must have registered their email to delete the account.<br/>
                Then on the main page, enter the account deletion section and enter the email that you have already registered.<br/>
                In the original version of the program, the delete link is sent to that email, but in the current version, a link is shown to the user and after clicking on it, the account is deleted.<br/>
                </p>
            </div>
        </div>
    )
}


export default Description
