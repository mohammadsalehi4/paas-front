import axios from 'axios';
import React,{useEffect,useState} from 'react'
import Address from '../../Address'

const AutoLogin = (props) => {

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

  const [isLogin,SetIsLogin]=useState(false)

  const address=props.match.params.Address
  const GC=getCookie('token')
  const GM=getCookie('mode')
  if(GC&&GM==='user'){
    axios.post(Address+'/autologin',{
      token:GC,
      address:address
    })
    .then(response=>{
      if(response.data.success){
        const newLink='http://'+address+'/pasautologin/'+response.data.username+'/'+response.data.loginCode
        window.location.assign(newLink)
      }
    })
  }

  return (
    <div className='mainDiv'>
        {!isLogin ? 
          <div id='newInputBox'></div>
          :
          null
        }
    </div>
  )
}

export default AutoLogin