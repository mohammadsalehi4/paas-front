import React from 'react'
import './userSignUp.css'
import axios from 'axios'
import Address from '../../Address'
import { useState,useEffect } from 'react'
const UserSignUp = () => {
    
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

    const signUp=()=>{
        SetLoading(true)
        const username=document.getElementById('signupUsernameInput').value
        const password=document.getElementById('getPassword').value
        axios.post(Address+'/signup',{
            'Number':String(username),
            'password':password
        })
        .then(response=>{
            SetLoading(false)
            if(response.data.success===true){
                document.getElementById('signupUsernameInput').value=''
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="Done!"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                },4000)
            }else{
                if(response.data.msg==='Wrong Phone Number format'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="wrong number"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
                if(response.data.msg==='Unsuccessful'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="signup failed"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
                if(response.data.msg==='this Number is already exist'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="Number exist"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
            }
        })
        .catch(err=>{
        })
    }
    
    return (
        <div  className="mainDiv">
            <div id="notif"></div>
            <div id="newInputBoxU">
                    <h5 id="titleBox">user signup</h5>
                    <input placeholder="Phone Number..." type="text" className="inp1" id="signupUsernameInput"/>
                    <input placeholder="Password..." type="text" className="inp1" id="getPassword"/>

                {
                    !loading ?
                        <button className="inp2" id="getCode1" onClick={signUp}>SignUp</button>
                    :
                        <button className="inp2" id="getCode1" onClick={signUp}>
                            <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                            <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                        </button>
                } 
            </div>
            <div id='homeImage' ></div>
            <div id="description11" className="Dplus">
                <h1 className="about">About</h1>
                <p>Users can register on this page.<br/><br/>
                After entering the mobile number, the password must be entered by the site's dedicated keyboard in the relevant box.<br/><br/>
                The reason for using a dedicated keyboard is more security.<br/><br/>
                In the final version of the program, after registration, a text message containing the activation link will be sent to the mobile number, which must be clicked to activate.<br/><br/>
                In the current version, the account is active by default after registration.
                </p>
            </div>
        </div>
    )
}

export default UserSignUp