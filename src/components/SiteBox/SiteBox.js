import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './SiteBox.css'
import Address from '../../Address';
const SiteBox = (props) => {

    const [loadingStyle,SetLoadingStyle]=useState(127)
    const [loading,SetLoading]=useState(false)

    useEffect(()=>{
        if(loading){
            const mineser=(mmm)=>{
                setTimeout(() => {
                    SetLoadingStyle(mmm)
                    if(mmm>77){
                        mineser(mmm-10)
                    }else{
                        adder(mmm)
                    }
                }, 20);
            }
            const adder=(lll)=>{
                setTimeout(() => {
                    SetLoadingStyle(lll)
                    if(lll<177){
                        adder(lll+10)
                    }else{
                        mineser(lll)
                    }
                }, 20);
            }
            adder(loadingStyle)
        }
    },[loading])

    function copyToClipboard() {
        navigator.clipboard.writeText(document.getElementsByClassName(props.Address)[0].innerHTML)
        document.getElementById('notif').style.display="block"
        document.getElementById('notif').style.opacity="0.6"
        setTimeout(()=>{
            document.getElementById('notif').style.display="none"
        },4000)
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
    
    const [code,SetCode]=useState('No Code!')
    const [newTime,SetNewTime]=useState(0)
    
    const getCode=()=>{
        SetLoading(true)
        const token=getCookie('token')
        axios.post(Address+'/getcode',{
            'Address':props.Address
        },{
            headers:{
                authorization:token
            }
        })
        .then(response=>{
            SetLoading(false)
            if(response.data.success===true){
                SetCode(response.data.code)
                const time=new Date()
                SetNewTime((Math.floor(time.getTime()/1000))+59)
                copyToClipboard()
            }
        })
    }
    useEffect(()=>{
        if((newTime-props.now)<=0){
            SetCode('No Code!')
            SetNewTime(props.now)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[(newTime-props.now)])

    if(props.boxID===0){
        return (
            <div className="siteBox siteBox1">
                <div id="leftDiv">
                    <h3 id="Address">{props.Address}</h3>
                    <p id="username">{props.Username}</p>
                    {
                    !loading ?
                        <button className="inp2" id="getCode" onClick={getCode}>get Code</button>
                    :
                        <button className="inp2" id="getCode" onClick={getCode}>
                            <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                            <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                        </button>
                    }
                </div>
                <div id="rightDiv">
                    <h5 style={{margin:"20px"}} id="showCode" className={props.Address}>{code}</h5>
                </div>
                <div className="outProgress">
                    <div className="inProgress" style={{width:`${(newTime-props.now)*1.7}%`}}></div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="siteBox">
                <div id="leftDiv">
                    <h3 id="Address">{props.Address}</h3>
                    <p id="username">{props.Username}</p>
                    <button onClick={getCode} id="getCode">get Code</button>
                </div>
                <div id="rightDiv">
                    <h5 style={{margin:"20px"}} id="showCode" className={props.Address}>{code}</h5>
                </div>
                <div className="outProgress">
                    <div className="inProgress" style={{width:`${(newTime-props.now)*1.7}%`}}></div>
                </div>
            </div>
        )
    }
    

}

export default SiteBox
