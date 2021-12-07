import React from 'react'
import axios from 'axios'
import Address from '../../Address'
import './DeleteAcc.css'
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
            <div id="inputBox1">
                <h5 id="titleBox">delete Account</h5>
                <input placeholder="Email..." type="text" className=" inp1" id="EmailBox"/>
                <button className="inp2" id="getCode1" onClick={sendMailLink}>send Delete Link</button>
            </div>            
            <div id="description11">
                <p className="descP"><h1 className="about">About</h1>
                On this page, users can delete their account without logging in.<br/><br/>
                To do this, you must first register your email<br/><br/>
                Then enter the email you registered in the box above.<br/><br/>
                In the final version, an email containing a link will be emailed to you, Clicking on that link will delete your account.<br/><br/>
                In the current version, the link is displayed only through the alert, which is enough to copy it in the browser.
                </p>
            </div>
        </div>
    )
}


export default DeleteAcc
