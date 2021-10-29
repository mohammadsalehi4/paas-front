import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './SetNumber.css'
import Address from '../../Address'
const SetNumber = (props) => {
    const [desc,SetDesc]=useState('Loading...')
    
    function setCookie(cname, cvalue, exhours) {
        var d = new Date();
        d.setTime(d.getTime() + (exhours*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
    
    const siteExit=()=>{
        const token=getCookie('token')
        const mode=getCookie('mode')
        setCookie('token',token,0)
        setCookie('mode',mode,0)
        window.location.assign('/')
    }
    
    useEffect(()=>{
        const lastNumber=props.match.params.lastNumber
        const newNumber=props.match.params.newNumber
        const code=props.match.params.code
        axios.get(Address+`/changeNumber/${lastNumber}/${newNumber}/${code}`)
        .then(response=>{
            if(response.data.success===true){
                SetDesc('Number changed!')
            }
            else{
                SetDesc('Unsuccessful!')
            }
            setTimeout(()=>{
                siteExit()
            },2000)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div className="mainDiv">
            <div id="description1">{desc}</div>    
        </div>
    )
}

export default SetNumber