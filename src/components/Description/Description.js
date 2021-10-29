import React from 'react'
import './Description.css'
const Description = () => {
    return (
        <div id="mainDiv">
            <div id="DescriptionBox">
            The purpose of this program is to use a second variable password in addition to the normal passwords to enter different sites.<br/>
            The time to use this software is when logging in to various sites. After entering the username and password, instead of completing the login process, it enters a page that requests a second six-digit password, which must be passed from within the user's account. Will be received and after entering that password, it will send it to the software server and if confirmed, the login process will be completed. Sites that use this software may not even use regular passwords to log in to their users.
            Each user can add any number of sites that use this feature to their application and get a second password to log in to any of those sites through the application. Obviously, the password of each of the sites added to the user application is different, and also normally there is no password for any of the added sites, and the user must request a second password for the site he intends to enter. Give. Then the one-time password for that site will be activated with a validity period of one minute. The reason for this feature is that in order to receive the password, the request must first be registered by the user so that other people do not have a chance to log in to the user account by entering random passwords.
            Also, each person's pass account can be entered in only one device and through one number, and it is not possible to log in to two devices at the same time. It is not even possible for the user to log out of one of the devices and log in to another device, and it is always possible to log in to the pass account only through a specific device. The only way to change the device is to log in to the pass account. Through the second device, the QRcode displayed by the first device is scanned to change the device, then the account is removed from the first device and transferred to the second device.
            Another feature of the pass is the ability to remotely delete the account via email. If the user registers an email, it is possible that if the device on which the pass account is installed is lost, the account will be deleted remotely so that the user can create another account and add sites to the new account. Enter sites.
            All code stored in the pass database is encrypted by the hashing algorithm and cannot be decoded, and even if the database information is hacked, users' passwords cannot be accessed.
            </div>
        </div>
    )
}

export default Description
