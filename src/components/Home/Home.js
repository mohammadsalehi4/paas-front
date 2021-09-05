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
      
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            alert(c.substring(name.length, c.length));
            return
          }
        }
        alert('not fouded')
    }
    
    function checkCookie() {
        var isToken = getCookie("token");
        if (isToken !== "") {
            //
        } else {
            //
        }
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
                //dar cokkie zakhire she
                document.getElementById('getPassword').value=''
                document.getElementById('getNumber').value=''
                setCookie('token',response.data.token,1)
                setCookie('mode','site',1)
            }
            else{
                document.getElementById('getPassword').value=''
                document.getElementById('getNumber').value=''
                alert('Login failed')
            }
        })
    }
    
    return (
        <div>
            <div id="inputBox">
                <h5>login</h5>
                <input placeholder="Phone Number..." type="text" className="form-control inp1" id="getNumber"/>
                <input placeholder="Password..." type="password" className="form-control inp1"  id="getPassword"/>
                <Button className=" inp1 inp2" onClick={()=>{getCookie('token')}}>User login</Button>
                <Button className=" inp1 inp2" onClick={siteLogin}>Site login</Button>
            </div>
        </div>
    )
}

export default Home
