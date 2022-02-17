import React from 'react'
import axios from 'axios'
import Address from '../../Address'

const ChangePassword = (props) => {
    
    const Add=()=>{
        if(document.getElementById('NumberBox').value!==document.getElementById('NumberBox1').value){
            document.getElementById('notif').style.display="block"
            document.getElementById('notif').innerHTML="different passwords"
            document.getElementById('notif').style.opacity="0.6"
            setTimeout(()=>{
                document.getElementById('notif').style.display="none"
            },4000)
            return
        }
        const mode=props.match.params.mode
        const ID=props.match.params.ID
        const code=props.match.params.code
        axios.post(Address+`/recovery/${mode}/${ID}/${code}`,{
            newPassword:document.getElementById('NumberBox').value
        },{})
        .then(response=>{
            if(response.data.success===true){
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="changed!"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                    window.location.assign("http://localhost:3000")
                },4000)

            }else{
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="failed!"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                },4000)
            }
        })
    }
    return (
        <div className="mainDiv">
            <div id="notif"></div>
            <div id="inputBox">
                <h5 id="titleBox">change password</h5>
                <input placeholder="new password..." type="password" className="form-control inp1" id="NumberBox"/>
                <input placeholder="repeat password..." type="password" className="form-control inp1" id="NumberBox1"/>
                <button className="inp2" id="getCode1" onClick={Add}>change</button>
            </div>
            <div id="description11">
                <p className="descP"><h1 className="about">About</h1>
                On this page, you can change your account password <br/><br/>
                To do this, the link provided by the site must be correct.<br/><br/>
                On this page, both users and sites can change their password.<br/><br/>
                </p>
            </div>
        </div>
    )
}

export default ChangePassword
