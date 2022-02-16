import React from 'react'
import './Description.css'
const Description = () => {
    return (
        <div className="mainDiv">
            <div id="DescriptionBox">
                <h1 className='Dtitle'>what is Pas?</h1>
                <p className='Dtext'>The purpose of the Pas application is to provide more security for the login process to different sites.<br/>
                This service provides users with a second dynamic password to login to different sites.<br/>
                In this service, due to the fact that a variable password is used and that the user must request a password in his user account to receive the password, it is not possible to reveal the passwords and enter the lucky passwords.<br/>
                For example, banks' second password applications can be used as an example of variable passwords to create more security.<br/>
                This program uses a dedicated keyboard to login to prevent the browser from saving the password.<br/>
                Also, all important information is stored encrypted with the hashing and non-decoding process, and there is a guarantee that even with hackers accessing the application database, important user information will not be revealed.<br/>
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
                The first part of the user dashboard is to get the login code to the sites.<br/>
                In this section, each site is in a separate box with the site address, username and code specific to that site.<br/>
                By clicking on the password button, users can receive a one-time code with a validity of one minute, which they must enter in the special box for entering the second password on their desired site.<br/>
                </p>
                <h2 className='Dundertitle'>add Site to Account</h2>
                <p className='Dtext'>
                To add sites, users must first register on that site.<br/>
                The site then displays a 6-digit code that they must enter with the site address and username in the "add Site" section.<br/>
                If all three are correct, the site will be added to the account.<br/>
                </p>
                <h2 className='Dundertitle'>Site users validation</h2>
                <p className='Dtext'>
                First, users must receive their 6-digit login code from their account in the same site box.<br/>
                Then enter the code in the desired site and confirm it.<br/>
                The site then sends the code for validation along with its own token and username to the /confirm address.<br/>
                Then, after validation, if the validation is confirmed, the status value in the response will send true value to the same site.<br/>
                </p>
                <h2 className='Dundertitle'>add previous users</h2>
                <p className='Dtext'>
                The site sends a variable with an array consisting of a list of its previous users in the users variable to /Addprevioususers.<br/>
                The site itself then registers users who have not previously registered.<br/>
                </p>
            </div>
        </div>
    )
}


export default Description
