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
        </div>
    )
}

export default Recovery
