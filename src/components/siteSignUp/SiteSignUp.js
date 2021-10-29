import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './SiteSignUp.css'
import Address from '../../Address'
const SiteSignUp = () => {
    const siteSignUp=()=>{
        const username=document.getElementById('signupSiteNumberInput').value
        const address=document.getElementById('signupSiteddressInput').value
        const password=document.getElementById('signupSitePasswordInput').value
        
        axios.post(Address+'/siteregistration',{
            'Address':address,
            'Number':username,
            'password':password
        })
        .then(response=>{
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
            <div id="inputBox">
                    <h5 id="titleBox">site signup</h5>
                    <input placeholder="Phone Number..." type="text" className=" inp1" id="signupSiteNumberInput" />
                    <input placeholder="Address..." type="text" className=" inp1" id="signupSiteddressInput" />
                    <input placeholder="Password..." type="password" className=" inp1" id="signupSitePasswordInput"/>
                    <button className="inp2" id="getCode1" onClick={siteSignUp}>signUp</button>
            </div>
        </div>
    )
}

export default SiteSignUp
