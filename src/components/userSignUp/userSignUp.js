import React from 'react'
import './userSignUp.css'
import { Button} from 'react-bootstrap'
import axios from 'axios'
const UserSignUp = () => {
    const signUp=()=>{
        const username=document.getElementById('signupUsernameInput').value
        const password=document.getElementById('signupPasswordInput').value
        axios.post('http://localhost:4000/signup',{
            'Number':username,
            'password':password
        })
        .then(response=>{
            if(response.data.success===true){
                document.getElementById('signupUsernameInput').value=''
                document.getElementById('signupPasswordInput').value=''
                alert('signup completed, please confirm your Number')
            }else{
                if(response.data.msg==='Wrong Phone Number format'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('signupPasswordInput').value=''
                    alert('please enter true Phone Number')
                }
                if(response.data.msg==='Unsuccessful'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('signupPasswordInput').value=''
                    alert('Unsuccessful')
                }
                if(response.data.msg==='this Number is already exist'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('signupPasswordInput').value=''
                    alert('this Number is already exist')
                }
            }
        })
    }
    
    return (
        <div  className="mainDiv">
            <div id="inputBox">
                    <h5>user signup</h5>
                    <form>
                    <input placeholder="Phone Number..." type="text" className="form-control inp1" id="signupUsernameInput"/>
                    <input placeholder="Password..." type="password" className="form-control inp1" id="signupPasswordInput"/>
                    <Button className="inp1 inp3" onClick={signUp}>signUp</Button>
                    </form>
            </div>
        </div>
    )
}

export default UserSignUp