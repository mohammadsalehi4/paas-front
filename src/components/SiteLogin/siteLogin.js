import React,{useEffect,useState} from 'react'
import './siteLogin.css'
import axios from 'axios'
import Address from '../../Address'
const SiteLogin = () => {
    
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

    function copyToClipboard(getToken) {
        navigator.clipboard.writeText(getToken)
    }
    
    const siteLogin=()=>{
        SetLoading(true)
        const Numb=document.getElementById('getNumber').value
        const Pass=document.getElementById('getPassword').value
        axios.post(Address+'/siteLogin',{
            'number':String(Numb),
            'password':Pass
        })
        .then(response=>{
            if(response.data.success===true){
                SetLoading(false)
                const givenToken='Bearer '+response.data.token
                copyToClipboard(givenToken)
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="Token Copied to ClipBoard"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                },4000)
            }
            else{
                SetLoading(false)
                document.getElementById('getPassword').value=''
                document.getElementById('getNumber').value=''
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="Login failed"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                },4000)
            }
        })
    }
    
    return (
        <div className="mainDiv">
            <div id="notif"></div>
            <div id="inputBox">
                <h5 id="titleBox">site login</h5>
                <input placeholder="Phone Number..." type="text" className="inp1" id="getNumber"/>
                <input placeholder="Password..." type="password" className="inp1"  id="getPassword"/>

                {
                    !loading ?
                        <button className="inp2" id="getCode1" onClick={siteLogin}>Login</button>
                    :
                        <button className="inp2" id="getCode1" onClick={siteLogin}>
                            <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                            <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                        </button>
                }

                <a href="/siteRecovery" id="recovery">Recovery Account</a>
            </div>
            <div id='homeImage' ></div>
            <div id="description11">
                <p className="descP"><h1 className="about">About</h1>
                On this page, sites can log in to receive their own token.<br/><br/>
                Dedicated tokens are used to confirm the password of the users of that site<br/><br/>
                To verify users' passwords, sites must submit a post request to the 'ADDRESS/siteLogin' with the following content:<br/><br/>
                headers: received token<br/>
                body: {"{"}username,code{"}"}
                </p>
            </div>
        </div>
    )
}

export default SiteLogin
