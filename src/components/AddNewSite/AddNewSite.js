import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Address from '../../Address'
import './AddNewSite.css'

const AddNewSite = () => {

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

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return(c.substring(name.length, c.length));
          }
        }
        return ''
    }

    const Add=()=>{
        SetLoading(true)
        const token=getCookie('token')
        axios.post(Address+'/AddSiteToDb',{
            Address:document.getElementById('AddressBox').value,
            username:document.getElementById('UsernameBox').value,
            code:document.getElementById('CodeBox').value
        },{
            headers:{
                authorization: token
            }
        })
        .then(response=>{
            SetLoading(false)
            if(response.data.success===true){
                alert('added')
                window.location.reload()
            }else{
                if(response.data.msg==='you are already added this site'){
                    alert('you are already added this site')
                }
                if(response.data.msg==='need_add_to_db_from_site'){
                    alert('that site dont add you')
                }else{
                    alert('unsuccessful')
                }
            }
        })
    }

    return (
        <div className="mainDiv">
            <div id="inputBox5">
                <h5 id="titleBox">new Site</h5>
                <input placeholder="Site Address..." type="text" className="inp1" id="AddressBox"/>
                <input placeholder="Username..." type="text" className="inp1" id="UsernameBox"/>
                <input placeholder="Code..." type="text" className="inp1" id="CodeBox"/>
                {
                    !loading ?
                        <button className="inp2" id="getCode1" onClick={Add}>Add Site</button>
                    :
                        <button className="inp2" id="getCode1" onClick={Add}>
                            <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                            <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                        </button>
                }
            </div>
            <div id="description11" className="Dplus">
                <h1 className="about">About</h1><br/>
                <p>In this page, you can add sites that use the pass service to your account.<br/><br/>
                You must enter site address and your username on that site. <br/><br/>
                You must also enter a 7-character code that will be given to you on the same site.<br/><br/>
                In the final version of the program, you can scan the QRcode to perform these steps faster.
                </p>
            </div>
        </div>
    )
}

export default AddNewSite
