import React from 'react'
import './siteLogin.css'
import axios from 'axios'
import Address from '../../Address'
const SiteLogin = () => {
    
    function copyToClipboard(getToken) {
        navigator.clipboard.writeText(getToken)
    }
    
    const siteLogin=()=>{
        const Numb=document.getElementById('getNumber').value
        const Pass=document.getElementById('getPassword').value
        axios.post(Address+'/siteLogin',{
            'number':String(Numb),
            'password':Pass
        })
        .then(response=>{
            if(response.data.success===true){
                const givenToken='Bearer '+response.data.token
                copyToClipboard(givenToken)
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="Token Copied to ClipBoard"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                    window.location.assign("http://localhost:3000")
                },4000)
            }
            else{
                document.getElementById('getPassword').value=''
                document.getElementById('getNumber').value=''
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="Login failed"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                },4000)
            }
        })
    }
    
    return (
        <div className="mainDiv">
            <div id="notif"></div>
            <div id="inputBox">
                <h5 id="titleBox">site login</h5>
                <input placeholder="Phone Number..." type="text" className="inp1" id="getNumber"/>
                <input placeholder="Password..." type="password" className="inp1"  id="getPassword"/>
                <button className="inp2" id="getCode1" onClick={siteLogin}>Login</button>
                <a href="/siteRecovery" id="recovery">Recovery Account</a>
            </div>
            <div id="description11">
                <p className="descP"><h1 className="about">About</h1>
                On this page, sites can log in to receive their own token.<br/><br/>
                Dedicated tokens are used to confirm the password of the users of that site<br/><br/>
                To verify users' passwords, sites must submit a post request to the 'ADDRESS/siteLogin' with the following content:<br/><br/>
                headers: received token<br/>
                body: {"{"}username,code{"}"}
                </p>
            </div>
        </div>
    )
}

export default SiteLogin
