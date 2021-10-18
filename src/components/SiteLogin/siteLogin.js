import React from 'react'
import './siteLogin.css'
import { Button } from 'react-bootstrap'
import axios from 'axios'

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
        axios.post('http://localhost:4000/siteLogin',{
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
                alert('Login failed')
            }
        })
        
    }
    
    return (
        <div className="mainDiv">
            <div id="inputBox">
                <h5>site login</h5>
                <input placeholder="Phone Number..." type="text" className="form-control inp1" id="getNumber"/>
                <input placeholder="Password..." type="password" className="form-control inp1"  id="getPassword"/>
                <Button className="inp2" onClick={siteLogin}>Login</Button>
                <a href="/siteRecovery" id="recovery">Recovery Account</a>
            </div>
            <div id="description">
                <h1>title</h1>
                <p>aspdkoasdkas aspdkoasdkas;dkas;odkkkkhdakuhdkshdkasudkk  asoiodjlasdjaslidjaslidjaslidjd</p>
                <p>asdasmdl aspdkoasdkas;dkas;aspdkoasdkas  aspdkoasdkas</p>
                <p>odkkkkhdakuhdkshdkasudkk aspdkoasdkas;dkas;odkkkkhdakuhdkshdkasudkk  asoiodjlasdjaslidjaslidjaslidjd</p>
                <p>asdasmdl aspdkoasdkas;dkas;aspdkoasdkas  odkkkkhdakuhdkshdkasudkk</p>
                <p>aspdkoasdkas aspdkoasdkas;dkas;aspdkoasdkas  asoiodjlasdjaslidjaslidjaslidjd</p>
                <p>asdasmdl aspdkoasdkas;dkas;aspdkoasdkas  aspdkoasdkas</p>

            </div>
        </div>
    )
}

export default SiteLogin
