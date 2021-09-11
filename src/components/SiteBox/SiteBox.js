import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './SiteBox.css'
const SiteBox = (props) => {

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
    
    const [code,SetCode]=useState('empty')
    const [newTime,SetNewTime]=useState(0)
    
    const getCode=()=>{
        
        const token=getCookie('token')
        axios.post('http://localhost:4000/getcode',{
            'Address':props.Address
        },{
            headers:{
                authorization:token
            }
        })
        .then(response=>{
            if(response.data.success===true){
                SetCode(response.data.code)
                const time=new Date()
                SetNewTime((Math.floor(time.getTime()/1000))+59)
            }
        })
    }

    useEffect(()=>{
        if((newTime-props.now)<=0){
            SetCode('empty')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[(newTime-props.now)])
    
    return (
        <div className="siteBox">
            <p>Address: {props.Address}</p>
            <p>username: {props.Username}</p>
            <button onClick={getCode}>get Code</button>
            <div class="progress" style={{height:"15px"}}>
                <div class="progress-bar" style={{width:`${(newTime-props.now)*1.7}%` , height:"15px"}}></div>
            </div>
            <h5 style={{margin:"20px"}}>code: {code}</h5>
        </div>
    )
}

export default SiteBox
