import React,{useEffect,useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './SiteSignUp.css'
import Address from '../../Address'
const SiteSignUp = () => {
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

    const siteSignUp=()=>{
        SetLoading(true)
        const username=document.getElementById('signupSiteNumberInput').value
        const address=document.getElementById('signupSiteddressInput').value
        const password=document.getElementById('signupSitePasswordInput').value
        
        axios.post(Address+'/siteregistration',{
            'Address':address,
            'Number':username,
            'password':password
        })
        .then(response=>{
            SetLoading(false)
            if(response.data.success===true){
                document.getElementById('signupSiteNumberInput').value=''
                document.getElementById('signupSiteddressInput').value=''
                document.getElementById('signupSitePasswordInput').value=''
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="Done!"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                },4000)
            }else{
                if(response.data.msg==='Unsuccessful'){
                    document.getElementById('signupSiteNumberInput').value=''
                    document.getElementById('signupSiteddressInput').value=''
                    document.getElementById('signupSitePasswordInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="failed"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
                if(response.data.msg==='this Address is already exist'){
                    document.getElementById('signupSiteNumberInput').value=''
                    document.getElementById('signupSiteddressInput').value=''
                    document.getElementById('signupSitePasswordInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="Address exist"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
                if(response.data.msg==='this Number is already exist'){
                    document.getElementById('signupSiteNumberInput').value=''
                    document.getElementById('signupSiteddressInput').value=''
                    document.getElementById('signupSitePasswordInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="number exist"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
                if(response.data.msg==='Wrong Phone Number format'){
                    document.getElementById('signupSiteNumberInput').value=''
                    document.getElementById('signupSiteddressInput').value=''
                    document.getElementById('signupSitePasswordInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="wrong number"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
                if(response.data.msg==='Wrong Address'){
                    document.getElementById('signupSiteNumberInput').value=''
                    document.getElementById('signupSiteddressInput').value=''
                    document.getElementById('signupSitePasswordInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="wrong Address"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
            }
        })
    }
    return (
        <div  className="mainDiv">
            <div id="notif"></div>
            <div id="inputBox2">
                    <h5 id="titleBox">site signup</h5>
                    <input placeholder="Phone Number..." type="text" className=" inp1" id="signupSiteNumberInput" />
                    <input placeholder="Address..." type="text" className=" inp1" id="signupSiteddressInput" />
                    <input placeholder="Password..." type="password" className=" inp1" id="signupSitePasswordInput"/>
                    {
                        !loading ?
                            <button className="inp2" id="getCode1" onClick={siteSignUp}>signUp</button>
                        :
                            <button className="inp2" id="getCode1" onClick={siteSignUp}>
                                <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                                <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                            </button>
                    }
            </div>
            <div id='homeImage' ></div>
            <div id="description11">
                <p className="descP"><h1 className="about">About</h1>
                On this page, different sites can register to use this service<br/><br/>
                In the final version of the program, after registration, the activation link will be sent to the registered number via SMS.<br/><br/>
                In the current version, the account is active by default after registration.</p>
            </div>
        </div>
    )
}

export default SiteSignUp
