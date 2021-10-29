import React from 'react'
import './userSignUp.css'
import { Button} from 'react-bootstrap'
import axios from 'axios'
import Address from '../../Address'
const UserSignUp = () => {
    const signUp=()=>{
        const username=document.getElementById('signupUsernameInput').value
        const password=document.getElementById('signupPasswordInput').value
        axios.post(Address+'/signup',{
            'Number':username,
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
    }
    
    return (
        <div  className="mainDiv">
            <div id="notif"></div>
            <div id="inputBox">
                    <h5 id="titleBox">user signup</h5>
                    <form>
                    <input placeholder="Phone Number..." type="text" className="inp1" id="signupUsernameInput"/>
                    <input placeholder="Password..." type="password" className="inp1" id="signupPasswordInput"/>
                    <button className="inp2" id="getCode1" onClick={signUp}>signUp</button>
                    </form>
            </div>
        </div>
    )
}

export default UserSignUp