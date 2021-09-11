import axios from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap'
import './Recovery.css'
const Recovery = () => {
    const recovery=()=>{
        const number=document.getElementById('userNumberBox').value
        axios.post('http://localhost:4000/sendrecoverylink',{
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
            <div id="inputBox">
                <h5>Recovery</h5>
                <input placeholder="Email..." type="text" className="form-control inp1" id="userNumberBox"/>
                <Button className="inp1 inp4" onClick={recovery}>send recovery link</Button>
            </div>
        </div>
    )
}

export default Recovery
