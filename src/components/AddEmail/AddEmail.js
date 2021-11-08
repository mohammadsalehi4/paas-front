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
        </div>
    )
}

export default AddEmail
