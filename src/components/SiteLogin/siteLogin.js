import React from 'react'
import './siteLogin.css'
import axios from 'axios'
import Address from '../../Address'
const SiteLogin = () => {
    function setCookie(cname, cvalue, exhours) {
        var d = new Date();
        d.setTime(d.getTime() + (exhours*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
                document.getElementById('getPassword').value=''
                document.getElementById('getNumber').value=''
                setCookie('token','Bearer '+response.data.token,1)
                setCookie('mode','site',1)
                window.location.assign("http://localhost:3000")
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
        </div>
    )
}

export default SiteLogin
