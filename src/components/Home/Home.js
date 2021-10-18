import React from 'react'
import './Home.css'
import { Button } from 'react-bootstrap'
import axios from 'axios'

const Home = () => {
    

    function setCookie(cname, cvalue, exhours) {
        var d = new Date();
        d.setTime(d.getTime() + (exhours*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    const UserLogin=()=>{
        const Numb=document.getElementById('getNumber').value
        const Pass=document.getElementById('getPassword').value
        axios.post('http://localhost:4000/login',{
            'Number':String(Numb),
            'password':Pass
        })
        .then(response=>{
            if(response.data.success===true){
                document.getElementById('getPassword').value=''
                document.getElementById('getNumber').value=''
                setCookie('token','Bearer '+response.data.token,1)
                setCookie('mode','user',1)
                window.location.reload()
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
                <h5>login</h5>
                <input placeholder="Phone Number..." type="text" className="form-control inp1" id="getNumber"/>
                <input placeholder="Password..." type="password" className="form-control inp1"  id="getPassword"/>
                <Button className="inp2" onClick={UserLogin}>User login</Button>             
                <a href="/RecoveryAcc" id="recovery">Recovery Account</a>
            </div>
            <div id="description">
                <h1>about</h1>
                This program gives dynamic password capability to different sites.<br/>
                This is initial version that does not have all the features of the final version.<br/>
                In addition to the password, you will need the code that the application generates on your account.<br/>
                You can download the project guide to learn about the features of the original version of the program.<br/>
            </div>
        </div>
    )
}

export default Home
