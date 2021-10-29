import React from 'react'
import './SiteHome.css'
import Address from '../../Address'
const SiteHome = () => {
    function copyToClipboard() {
      navigator.clipboard.writeText(getCookie('token'))
      document.getElementById('cpyTkn').innerHTML='copy Token to clipBoard ,(Copied)'
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
            return(c.substring(name.length, c.length));
          }
        }
        return ''
    }
    let headers="headers:{authorization:token}})"
    let body="users:[your users Array]"
    let req1=` axios.post('${Address}/Addprevioususers',{`
    let req2=" users:[users Array],"
    let req3=" {headers:{authorization: token}})"
    return (
        <div  className="mainDiv">
            <div className="frst">
              <h3>how to upload preveus users:</h3><br/>
              1-you have to save your usernames in an array.<br/>
              2-copy the token.<br/>
              3-make a request that has body and headers just like this:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{headers}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{body}<br/>
              4-post the request like this:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{req1}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{req2}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{req3}<br/>
            </div>
            <button className="sitehomebtn" id="cpyTkn" onClick={copyToClipboard}>copy Token to clipBoard</button>
        </div>
    )
}


export default SiteHome
