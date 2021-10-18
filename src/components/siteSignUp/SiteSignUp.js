import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './SiteSignUp.css'
const SiteSignUp = () => {
    const siteSignUp=()=>{
        const username=document.getElementById('signupSiteNumberInput').value
        const address=document.getElementById('signupSiteddressInput').value
        const password=document.getElementById('signupSitePasswordInput').value
        
        axios.post('http://localhost:4000/siteregistration',{
            'Address':address,
            'Number':username,
            'password':password
        })
        .then(response=>{
            if(response.data.success===true){
                document.getElementById('signupSiteNumberInput').value=''
                document.getElementById('signupSiteddressInput').value=''
                document.getElementById('signupSitePasswordInput').value=''
                alert('signup completed, please confirm your Number')
            }else{
                if(response.data.msg==='Unsuccessful'){
                    document.getElementById('signupSiteNumberInput').value=''
                    document.getElementById('signupSiteddressInput').value=''
                    document.getElementById('signupSitePasswordInput').value=''
                    alert('Unsuccessful')
                }
                if(response.data.msg==='this Address is already exist'){
                    document.getElementById('signupSiteNumberInput').value=''
                    document.getElementById('signupSiteddressInput').value=''
                    document.getElementById('signupSitePasswordInput').value=''
                    alert('this Address is already exist')
                }
                if(response.data.msg==='this Number is already exist'){
                    document.getElementById('signupSiteNumberInput').value=''
                    document.getElementById('signupSiteddressInput').value=''
                    document.getElementById('signupSitePasswordInput').value=''
                    alert('this Number is already exist')
                }
                if(response.data.msg==='Wrong Phone Number format'){
                    document.getElementById('signupSiteNumberInput').value=''
                    document.getElementById('signupSiteddressInput').value=''
                    document.getElementById('signupSitePasswordInput').value=''
                    alert('Wrong Phone Number format')
                }
                if(response.data.msg==='Wrong Address'){
                    document.getElementById('signupSiteNumberInput').value=''
                    document.getElementById('signupSiteddressInput').value=''
                    document.getElementById('signupSitePasswordInput').value=''
                    alert('Wrong Address')
                }
            }
        })
    }
    return (
        <div  className="mainDiv">
            <div id="inputBox">
                    <h5>site signup</h5>
                    <input placeholder="Phone Number..." type="text" className="form-control inp1" id="signupSiteNumberInput" />
                    <input placeholder="Address..." type="text" className="form-control inp1" id="signupSiteddressInput" />
                    <input placeholder="Password..." type="password" className="form-control inp1" id="signupSitePasswordInput"/>
                    <Button className="inp1 inp3" onClick={siteSignUp}>signUp</Button>

            </div>
        </div>
    )
}

export default SiteSignUp
