import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

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
        axios.post('http://localhost:4000/AddEmail',{
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
            <div id="inputBox">
                <h5>Add Email</h5>
                <input placeholder="Email..." type="text" className="form-control inp1" id="EmailBox"/>
                <Button className="inp1 inp4" onClick={Add}>send verify Link</Button>
            </div>
        </div>
    )
}

export default AddEmail
