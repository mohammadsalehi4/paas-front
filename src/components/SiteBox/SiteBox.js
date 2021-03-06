import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './SiteBox.css'
import Address from '../../Address';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const SiteBox = (props) => {

    const States = useSelector(state => state);
    const dispatch = useDispatch();

    const [loadingStyle,SetLoadingStyle]=useState(127)
    const [loading,SetLoading]=useState(false)

    const [loadingStyle1,SetLoadingStyle1]=useState(127)
    const [loading1,SetLoading1]=useState(false)

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

    useEffect(()=>{
        if(loading1){
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
            adder(loadingStyle1)
        }
    },[loading1])

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

    const autoLogin=()=>{
        SetLoading1(true)
        axios.post(Address+'/autologin',{
            token:getCookie('token'),
            address:props.Address
        },{
        headers:{
                authorization:getCookie('token')
            }
        })
        .then(response=>{
            if(response.data.success){
                const newLink='http://'+props.Address+'/pasautologin/'+response.data.username+'/'+response.data.loginCode
                window.location.assign(newLink)
                SetLoading1(false)
            }else{
                SetLoading1(false)
            }
        })
        .catch(err=>{
            SetLoading1(false)
        })
    }

    const deleteSite=()=>{
        axios.post(Address+'/deletesite',{
            address:props.Address
        },{
            headers:{
                authorization:getCookie('token')
            }
        })
        .then(response=>{
            if(response.data.success===true){
                alert('Deleted')
                window.location.assign('/')
            }else{
                alert('unsuccessful')
            }
        })
    }

    useEffect(()=>{
        if((newTime-States.NowTime)<=0){
            SetCode('No Code!')
            SetNewTime(States.NowTime)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[(newTime-States.NowTime)])

    if(props.boxID===0){
        return (
            <div className="siteBox siteBox1">
                <div id='SBLogo'></div>

                <div id="leftDiv">

                    <h3 id="Address">{props.Address}</h3>
                    <p id="username">{props.Username}</p>
                </div>

                <div id="rightDiv">
                    <h5 style={{margin:"20px"}} id="showCode" className={props.Address}>{code}</h5>

                </div>
                <div id='SmiddleDiv'>
                    {
                        !loading ?
                            <button  id="getCode" onClick={getCode}>get Code</button>
                        :
                            <button  id="getCode" onClick={getCode}>
                                <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                                <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                            </button>
                        }
                        {
                        !loading1 ?
                            <button  id="getCode" onClick={autoLogin}>Auto Login</button>
                        :
                            <button  id="getCode" onClick={autoLogin}>
                                <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                                <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                            </button>
                        }
                    <i class="fa fa-trash" id='trash' onClick={deleteSite} aria-hidden="true"></i>
                </div>
                <div className="outProgress">
                    <div className="inProgress" style={{width:`${(newTime-States.NowTime)*1.7}%`}}></div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="siteBox">
                <div id='SBLogo'></div>

                <div id="leftDiv">

                    <h3 id="Address">{props.Address}</h3>
                    <p id="username">{props.Username}</p>
                </div>

                <div id="rightDiv">
                    <h5 style={{margin:"20px"}} id="showCode" className={props.Address}>{code}</h5>

                </div>
                <div id='SmiddleDiv'>
                    {
                        !loading ?
                            <button  id="getCode" onClick={getCode}>get Code</button>
                        :
                            <button  id="getCode" onClick={getCode}>
                                <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                                <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                            </button>
                        }
                        {
                        !loading1 ?
                            <button  id="getCode" onClick={autoLogin}>Auto Login</button>
                        :
                            <button  id="getCode" onClick={autoLogin}>
                                <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                                <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                            </button>
                        }
                    <i class="fa fa-trash" id='trash' onClick={deleteSite} aria-hidden="true"></i>
                </div>
                <div className="outProgress">
                    <div className="inProgress" style={{width:`${(newTime-States.NowTime)*1.7}%`}}></div>
                </div>
            </div>
        )
    }
}

export default SiteBox
