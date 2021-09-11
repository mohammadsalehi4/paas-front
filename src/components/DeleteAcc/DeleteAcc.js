import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
const DeleteAcc = () => {
    const sendMailLink=()=>{
        const number=document.getElementById('EmailBox').value
        axios.post('http://localhost:4000/sendDeleteLink',{
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
                <h5>delete Account</h5>
                <input placeholder="Email..." type="text" className="form-control inp1" id="EmailBox"/>
                <Button className="inp1 inp4" onClick={sendMailLink}>send Delete Link</Button>
            </div>
        </div>
    )
}

export default DeleteAcc
