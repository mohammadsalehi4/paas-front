import React from 'react'
import axios from 'axios'
import Address from '../../Address'
import './AddNewSite.css'

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
        axios.post(Address+'/AddSiteToDb',{
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
            <div id="inputBox5">
                <h5 id="titleBox">new Site</h5>
                <input placeholder="Site Address..." type="text" className="inp1" id="AddressBox"/>
                <input placeholder="Username..." type="text" className="inp1" id="UsernameBox"/>
                <input placeholder="Code..." type="text" className="inp1" id="CodeBox"/>
                <button className="inp2" id="getCode1" onClick={Add} >Add Site</button>
            </div>
        </div>
    )
}

export default AddNewSite
