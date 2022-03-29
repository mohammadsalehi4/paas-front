import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Address from '../../Address'
import './DeleteAcc.css'
const DeleteAcc = () => {

    const [loadingStyle,SetLoadingStyle]=useState(127)
    const [loading,SetLoading]=useState(false)

    useEffect(()=>{
        if(loading){
            const mineser=(mmm)=>{
                setTimeout(() => {
                    SetLoadingStyle(mmm)
                    if(mmm>77){
                        mineser(mmm-10)
                    }else{
                        adder(mmm)
                    }
                }, 20);
            }
            const adder=(lll)=>{
                setTimeout(() => {
                    SetLoadingStyle(lll)
                    if(lll<177){
                        adder(lll+10)
                    }else{
                        mineser(lll)
                    }
                }, 20);
            }
            adder(loadingStyle)
        }
    },[loading])

    const sendMailLink=()=>{
        SetLoading(true)
        const number=document.getElementById('EmailBox').value
        axios.post(Address+'/sendDeleteLink',{
            'Email':number
        })
        .then(response=>{
            SetLoading(false)
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
                {
                    !loading ?
                        <button className="inp2" id="getCode1" onClick={sendMailLink}>send Delete Link</button>
                    :
                        <button className="inp2" id="getCode1" onClick={sendMailLink}>
                            <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                            <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                        </button>
                }
            </div>    
            <div id='homeImage' ></div>        
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
