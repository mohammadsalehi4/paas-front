import React from 'react'
import './Home.css'
import axios from 'axios'
import Address from '../../Address'
import { useState,useEffect } from 'react'

const Home = () => {

    const [loading,SetLoading]=useState(false)
    const [loadingStyle,SetLoadingStyle]=useState(127)

    function setCookie(cname, cvalue, exhours) {
        var d = new Date();
        d.setTime(d.getTime() + (exhours*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    

    
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


    const UserLogin=()=>{
        SetLoading(true)
        const Numb=document.getElementById('getNumber').value
        const Pass=document.getElementById('getPassword').value
        axios.post(Address+'/login',{
            'Number':String(Numb),
            'password':Pass
        })
        .then(response=>{
            SetLoading(false)
            if(response.data.success===true){
                document.getElementById('getNumber').value=''
                setCookie('token','Bearer '+response.data.token,1)
                setCookie('mode','user',1)
                window.location.reload()
            }
            else{
                document.getElementById('getNumber').value=''
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="Login failed"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                },4000)
            }
        })
        .catch(err=>{
        })
    }
    
    return (
        <div className="mainDiv">
            <div id="notif"></div>
            <div id="newInputBox">
                <h5 id="titleBox">login</h5>
                <input placeholder="Phone Number..." type="text" className="inp1" id="getNumber"/>
                <input placeholder='Password...' type="text" className="inp1" id="getPassword"/>

                {
                    !loading ?
                        <button className="inp2" id="getCode1" onClick={UserLogin}>Login</button>
                    :
                        <button className="inp2" id="getCode1" onClick={UserLogin}>
                            <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                            <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                        </button>
                }
                <a href="/RecoveryAcc" id="recovery">Recovery Account</a>     
            </div>
            <div id='homeImage' ></div>
            <div id="description11">
                <p className="descP"><h1 className="about">About</h1>
                This program gives dynamic password capability to different sites.<br/>
                When logging in to sites that use this service, in addition to the password, you will also need a second dynamic password that is obtained from this service.<br/>
                When entering a password, you should use the site keyboard for extra security<br/>
                in addition to the dynamic password, this program provide auto login service for sites.<br/>
                this service is like auto login with Gmail and users can login with their Pas account.<br/>
                All database data is stored encrypted and not decrypted, so it is guaranteed that all data will be completely secure.<br/>
                You can see full instructions and how the service works on <a href='/Description'>this page</a></p>
                
            </div>
        </div>
    )
}


export default Home
