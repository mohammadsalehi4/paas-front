import React from 'react'
import './ChangeNumber.css'
import axios from 'axios'
import Address from '../../Address'

const ChangeNumber = () => {

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
            return(c.substring(name.length, c.length));
          }
        }
        return ''
    }

    function setCookie(cname, cvalue, exhours) {
        var d = new Date();
        d.setTime(d.getTime() + (exhours*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    const Add=()=>{
        const token=getCookie('token')
        axios.post(Address+'/newNumber',{
            newNumber:document.getElementById('NumberBox').value
        },{
            headers:{
                authorization: token
            }
        })
        .then(response=>{
            if(response.data.success===true){
                alert(response.data.link)
                const token=getCookie('token')
                const mode=getCookie('mode')
                setCookie('token',token,0)
                setCookie('mode',mode,0)
                window.location.assign("http://localhost:3000")
            }else{
                if(response.data.msg==='wrong number'){
                    alert('wrong number')
                }
                else if(response.data.msg==='already exist'){
                    alert('this number is already exist')
                }else{
                    alert('unsuccessful')
                }
            }
        })
    }
    return (
        <div className="mainDiv">
            <div id="inputBox7">
                <h5  id="titleBox">new Number</h5>
                <input placeholder="Number..." type="text" className="inp1" id="NumberBox"/>
                <button className="inp2" id="getCode1" onClick={Add}>change Number</button>
            </div>
            <div id="description11">
                <p className="descP"><h1 className="about">About</h1>
                On this page you can change the mobile number of your account<br/><br/>
                You must enter your new number in this field<br/><br/>
                In the final version, a text message containing the link to change the number to the previous mobile number will be sent<br/><br/>
                In the current version of the program, the link is displayed by an alert that you just need to copy it in the browser</p>
            </div>
        </div>
    )
}

export default ChangeNumber
