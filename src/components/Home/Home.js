import React from 'react'
import './Home.css'
import axios from 'axios'
import Address from '../../Address'
import { useState,useEffect } from 'react'

const Home = () => {
    const [PassWord,SetPassWord]=useState('')
    const [showPassWord,SetShowPassWord]=useState('Password...')
    function setCookie(cname, cvalue, exhours) {
        var d = new Date();
        d.setTime(d.getTime() + (exhours*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    useEffect(()=>{
        if(PassWord!==''){
            SetShowPassWord(PassWord)
        }else{
            SetShowPassWord('Password...')
        }
    },[PassWord])
    
    const UserLogin=()=>{
        const Numb=document.getElementById('getNumber').value
        const Pass=PassWord
        axios.post(Address+'/login',{
            'Number':String(Numb),
            'password':Pass
        })
        .then(response=>{
            if(response.data.success===true){
                document.getElementById('getPassword').value=''
                document.getElementById('getNumber').value=''
                setCookie('token','Bearer '+response.data.token,1)
                setCookie('mode','user',1)
                window.location.reload()
            }
            else{
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

    return (
        <div className="mainDiv">
            <div id="notif"></div>
            <div id="newInputBox">
                <h5 id="titleBox">login</h5>
                <input placeholder="Phone Number..." type="text" className="inp1" id="getNumber"/>
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
                <button className="inp2" id="getCode1" onClick={UserLogin}>Login</button>
                <a href="/RecoveryAcc" id="recovery">Recovery Account</a>      
            </div>
            <div id="description11">
                <p className="descP"><h1 className="about">About</h1>
                This program gives dynamic password capability to different sites.<br/>
                In addition to the password, you will need the code that the application generates on your account.<br/>
                This is initial version that does not have all the features of the final version.</p>
            </div>
        </div>
    )
}


export default Home
