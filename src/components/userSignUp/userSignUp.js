import React from 'react'
import './userSignUp.css'
import axios from 'axios'
import Address from '../../Address'
import { useState,useEffect } from 'react'
const UserSignUp = () => {

    const [PassWord,SetPassWord]=useState('')
    const [showPassWord,SetShowPassWord]=useState('Password...')
    
    const signUp=()=>{
        console.log('start')
        const username=document.getElementById('signupUsernameInput').value
        const password=document.getElementById('signupPasswordInput').value
        console.log(username+'||'+password)
        console.log(Address+'signup')
        axios.post(Address+'signup',{
            'Number':String(username),
            'password':password
        })
        .then(response=>{
            if(response.data.success===true){
                document.getElementById('signupUsernameInput').value=''
                document.getElementById('signupPasswordInput').value=''
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="Done!"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                },4000)
            }else{
                if(response.data.msg==='Wrong Phone Number format'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('signupPasswordInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="wrong number"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
                if(response.data.msg==='Unsuccessful'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('signupPasswordInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="signup failed"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
                if(response.data.msg==='this Number is already exist'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('signupPasswordInput').value=''
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
            console.log(err)
        })
    }
    
    const addNumber=(Num)=>{
        let numb=String(PassWord)
        numb=numb+Num
        SetPassWord(numb)
    }
    
    const minus=()=>{
        let numb=String(PassWord)
        numb=numb.substring(0,numb.length-1)
        SetPassWord(numb)
    }
    
    const Allminus=()=>{
        SetPassWord('')
    }
    
    useEffect(()=>{
        console.log(PassWord)
        if(PassWord!==''){
            SetShowPassWord(PassWord)
        }else{
            SetShowPassWord('Password...')
        }
    },[PassWord])
    
    return (
        <div  className="mainDiv">
            <div id="notif"></div>
            <div id="newInputBox">
                    <h5 id="titleBox">user signup</h5>
                    <form>
                    <input placeholder="Phone Number..." type="text" className="inp1" id="signupUsernameInput"/>
                    <input placeholder={showPassWord} disabled type="text" className="inp1" id="getNumber"/>
                <div id="keyboard">
                    <button className="inputButton" onClick={()=>{addNumber(1)}}>1</button>
                    <button className="inputButton" onClick={()=>{addNumber(2)}}>2</button>
                    <button className="inputButton" onClick={()=>{addNumber(3)}}>3</button>
                    <button className="inputButton" onClick={()=>{addNumber(4)}}>4</button>
                    <button className="inputButton" onClick={()=>{addNumber(5)}}>5</button>
                    <button className="inputButton" onClick={()=>{addNumber(6)}}>6</button>
                    <button className="inputButton" onClick={()=>{addNumber(7)}}>7</button>
                    <button className="inputButton" onClick={()=>{addNumber(8)}}>8</button>
                    <button className="inputButton" onClick={()=>{addNumber(9)}}>9</button>
                    <button className="inputButton" onClick={()=>{addNumber(0)}}>0</button>
                    <button className="inputButton" onClick={minus}><i class="fa fa-backward" aria-hidden="true"></i></button>
                    <button className="inputButton" onClick={Allminus}><i class="fa fa-fast-backward" aria-hidden="true"></i></button>
                </div>
                <button className="inp2" id="getCode1" onClick={signUp}>SignUp</button>
                    </form>
            </div>
        </div>
    )
}

export default UserSignUp