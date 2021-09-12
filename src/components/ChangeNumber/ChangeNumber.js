import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

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
        axios.post('http://localhost:4000/newNumber',{
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
            <div id="inputBox">
                <h5>new Number</h5>
                <input placeholder="Number..." type="text" className="form-control inp1" id="NumberBox"/>
                <Button className="inp1 inp4" onClick={Add}>change Number</Button>
            </div>
        </div>
    )
}

export default ChangeNumber
