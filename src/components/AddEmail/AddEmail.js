import React from 'react'
import axios from 'axios'
import Address from '../../Address'
import './AddEmai.css'
const AddEmail = () => {

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

    const Add=()=>{
        const token=getCookie('token')
        axios.post(Address+'/AddEmail',{
            Email:document.getElementById('EmailBox').value
        },{
            headers:{
                authorization: token
            }
        })
        .then(response=>{
            if(response.data.success===true){
                alert(response.data.link)
            }else{
                alert('unsuccessful')
            }
        })
    }
    return (
        <div className="mainDiv">
            <div id="inputBox6">
                <h5  id="titleBox">Add Email</h5>
                <input placeholder="Email..." type="text" className="inp1" id="EmailBox"/>
                <button className="inp2" id="getCode1" onClick={Add}>send verify Link</button>
            </div>
            <div id="description11" className="Dplus">
                <h1 className="about">About</h1><br/>
                <p>In this page, you can add your Email.<br/><br/>
                After registering the email in the final version of the program, if you want to delete the account, give the link to delete the account to be sent to you<br/><br/>
                After clicking on the link sent to the email, your account will be deleted.<br/><br/>
                After deleting the account, to log in to your accounts on the sites that you previously added to the program, you must create a new account in the pass and add those sites again.<br/><br/>
                This feature was created so that if your device was stolen by someone, you can recover the sites you added.
                </p>
            </div>
        </div>
    )
}

export default AddEmail
