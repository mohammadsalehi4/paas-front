import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
const SiteHome = () => {

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
    const [showToken,SetShowToken]=useState('empty')
    
    const getToken=()=>{
        SetShowToken(getCookie('token'))
    }
    
    return (
        <div  className="mainDiv">
            <Button>upload List</Button>
            <Button onClick={getToken}>get Token</Button>
            <div style={{width:"100%"}}>{showToken}</div>
        </div>
    )
}

export default SiteHome
