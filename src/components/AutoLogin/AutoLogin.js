import axios from 'axios';
import React,{useEffect,useState} from 'react'
import Address from '../../Address'
import './AutoLogin.css'


const AutoLogin = (props) => {

  const [isLogin,SetIsLogin]=useState(true)
  const [PassWord,SetPassWord]=useState('')
  const [showPassWord,SetShowPassWord]=useState('Password...')
  const [Upper,SetUpper]=useState(true)
  const [loading,SetLoading]=useState(false)
  const [Number,SetNumber]=useState('')
  const [Link,SetLink]=useState('')

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

  function setCookie(cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + (exhours*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

  const addNumber=(Num)=>{
    let numb=String(PassWord)
    numb=numb+Num
    SetPassWord(numb)
  }

  const minus=()=>{
      let numb=String(PassWord)
      numb=numb.substring(0,numb.length-1)
      SetPassWord(numb)
  }

  const Allminus=()=>{
      SetPassWord('')
  }

  const UpperLower=()=>{
      SetUpper(!Upper)
  }

  const UserLogin=()=>{
    const Numb=document.getElementById('getNumber').value
    const Pass=document.getElementById('getPass').value
    axios.post(Address+'/login',{
      'Number':String(Numb),
      'password':Pass
    })
    .then(response=>{
      SetLoading(false)
      if(response.data.success===true){
        document.getElementById('getNumber').value=''
        setCookie('token','Bearer '+response.data.token,1)
        setCookie('mode','user',1)
        window.location.reload()
      }
    })
  }

  const selectNumber=()=>{
    window.location.assign(Link)
  }

  useEffect(()=>{
    const address=props.match.params.Address
    const GC=getCookie('token')
    const GM=getCookie('mode')
    if(GC&&GM==='user'){
      axios.post(Address+'/autologin',{
        token:GC,
        address:address
      })
      .then(response=>{
        if(response.data.success){
          SetIsLogin(true)
          SetNumber(response.data.username)
          const newLink='http://'+address+'/pasautologin/'+response.data.username+'/'+response.data.loginCode
          SetLink(newLink)
        }
      })
    }
  },[])

  useEffect(()=>{
    if(PassWord!==''){
        SetShowPassWord(PassWord)
    }else{
        SetShowPassWord('Password...')
    }
  },[PassWord])

  return (
    <div className='mainDiv'>
      {!isLogin ? 
        <div>
          <div id="newInputBox">
            <h5 id="titleBox">select Account Number</h5>
            <input placeholder="Phone Number..." type="text" className="inp1" id="getNumber"/>
            <input placeholder={showPassWord} type="text" className="inp1" id="getPass"/>
            {
                !loading ?
                    <button className="inp2" id="getCode1" onClick={UserLogin}>Login</button>
                :
                    <button className="inp2" id="getCode1" onClick={UserLogin}>prossesing...</button>
            }
            <a href="/RecoveryAcc" id="recovery">Recovery Account</a>     
            
          </div>
          <div id='homeImage' ></div>
        </div>
      :
        <div>
          <div id='inputBox1'>
              <h5 id="titleBox">select Account</h5>
              <div className='AutoLogin' onClick={selectNumber}>
                  <div className='ALLogo'>Pas</div>
                  <p className='ALP'>{' '} {Number} </p>
              </div>
              
          </div>
          <div id='homeImage' ></div>
        </div>
      }
    </div>
  )
}

export default AutoLogin