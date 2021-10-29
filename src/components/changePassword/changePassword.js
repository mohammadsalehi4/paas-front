import React from 'react'
import { Button } from 'react-bootstrap'
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
                <h5>change password</h5>
                <input placeholder="new password..." type="password" className="form-control inp1" id="NumberBox"/>
                <input placeholder="repeat password..." type="password" className="form-control inp1" id="NumberBox1"/>
                <Button className="inp1 inp4" onClick={Add}>change</Button>
            </div>
        </div>
    )
}

export default ChangePassword
