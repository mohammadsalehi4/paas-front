import axios from 'axios'
import React from 'react'
import './Recovery.css'
import Address from '../../Address'
const Recovery = () => {
    const recovery=()=>{
        const number=document.getElementById('userNumberBox').value
        axios.post(Address+'/sendrecoverylink',{
            'Number':number
        })
        .then(response=>{
            if(response.data.success===true){
                document.getElementById('userNumberBox').value=''
                alert('recoverylink Sent')
                alert('Link: '+response.data.link)
            }
            else{
                if(response.data.msg==='Unsuccessful'){
                    document.getElementById('userNumberBox').value=''
                    alert('Unsuccessful')
                }
                if(response.data.msg==='user not found'){
                    document.getElementById('userNumberBox').value=''
                    alert('user not found')
                }
            }
        })
    }
    return (
        <div  className="mainDiv">
            <div id="inputBox4">
                <h5 id="titleBox">Recovery</h5>
                <input placeholder="Number..." type="text" className="inp1" id="userNumberBox"/>
                <button className="inp2" id="getCode1" onClick={recovery}>send recovery link</button>
            </div>
            <div id="description11">
                <p className="descP"><h1 className="about">About</h1>
                On this page, you can recover accounts that have been blocked due to entering the wrong password, or whose password has been forgotten.<br/><br/>
                You must first enter your mobile number that you registered in the box above.<br/><br/>
                After confirmation, in final version will send a recovery message to phone numbe, but in this version will show a recovery link that you need it to choose new password.<br/><br/>
                </p>
            </div>
        </div>
    )
}

export default Recovery
