import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

const AddNewSite = () => {

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
        axios.post('http://localhost:4000/AddSiteToDb',{
            Address:document.getElementById('AddressBox').value,
            username:document.getElementById('UsernameBox').value,
            code:document.getElementById('CodeBox').value
        },{
            headers:{
                authorization: token
            }
        })
        .then(response=>{
            if(response.data.success===true){
                alert('added')
                window.location.reload()
            }else{
                if(response.data.msg==='you are already added this site'){
                    alert('you are already added this site')
                }
                if(response.data.msg==='need_add_to_db_from_site'){
                    alert('that site dont add you')
                }else{
                    alert('unsuccessful')
                }
            }
        })
    }

    return (
        <div className="mainDiv">
            <div id="inputBox">
                <h5>new Site</h5>
                <input placeholder="Site Address..." type="text" className="form-control inp1" id="AddressBox"/>
                <input placeholder="Username..." type="text" className="form-control inp1" id="UsernameBox"/>
                <input placeholder="Code..." type="text" className="form-control inp1" id="CodeBox"/>
                <Button className="inp1 inp4" onClick={Add} >Add Site</Button>
            </div>
        </div>
    )
}

export default AddNewSite
