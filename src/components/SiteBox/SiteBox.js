import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './SiteBox.css'
import { Button } from 'react-bootstrap'

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
    
    const [code,SetCode]=useState('No Code!')
    const [newTime,SetNewTime]=useState(0)
    const [index]=useState(props.index)
    
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
            SetCode('No Code!')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[(newTime-props.now)])
    
    return (
        <div className="siteBox">
            <div id="leftDiv">
                <h3 id="Address">{props.Address}</h3>
                <p id="username">{props.Username}</p>
                <Button onClick={getCode} id="getCode">get Code</Button>
            </div>
            <div id="rightDiv">
                <h5 style={{margin:"20px"}} id="showCode">{code}</h5>
            </div>
            <div class="progress PRBox">
                <div class="progress-bar PRBox" style={{width:`${(newTime-props.now)*1.7}%`}}></div>
            </div>
        </div>
    )
}

export default SiteBox
