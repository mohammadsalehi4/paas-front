import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Address from '../../Address'
const DeleteAcc = () => {
    const sendMailLink=()=>{
        const number=document.getElementById('EmailBox').value
        axios.post(Address+'/sendDeleteLink',{
            'Email':number
        })
        .then(response=>{
            if(response.data.success===true){
                document.getElementById('EmailBox').value=''
                alert('Delete Link Sent')
                alert('Link: '+response.data.link)
            }
            else{
                if(response.data.msg==='Unsuccessful'){
                    document.getElementById('EmailBox').value=''
                    alert('Unsuccessful')
                }
                if(response.data.msg==='Email is not Active'){
                    document.getElementById('EmailBox').value=''
                    alert('Email is not Active')
                }
            }
        })
    }
    return (
        <div className="mainDiv">
            <div id="inputBox">
                <h5 id="titleBox">delete Account</h5>
                <input placeholder="Email..." type="text" className=" inp1" id="EmailBox"/>
                <button className="inp2" id="getCode1" onClick={sendMailLink}>send Delete Link</button>
            </div>
        </div>
    )
}


export default DeleteAcc
