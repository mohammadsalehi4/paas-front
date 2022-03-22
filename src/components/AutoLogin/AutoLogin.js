import axios from 'axios';
import React,{useEffect,useState} from 'react'
import Address from '../../Address'
import './AutoLogin.css'


const AutoLogin = (props) => {

  const [isLogin,SetIsLogin]=useState(false)
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
    const Pass=PassWord
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
          SetNumber(response.data.Number)
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
        <div id="newInputBox">
          
          <input placeholder="Phone Number..." type="text" className="inp1" id="getNumber"/>
          <input placeholder={showPassWord} disabled type="text" className="inp1"/>
          {
              !loading ?
                  <button className="inp2" id="getCode1" onClick={UserLogin}>Login</button>
              :
                  <button className="inp2" id="getCode1" onClick={UserLogin}>prossesing...</button>
          }
          <a href="/RecoveryAcc" id="recovery">Recovery Account</a> 
          <div id="keyboard">
            <button className="inputButtonN topbtn" onClick={()=>{addNumber(1)}}>1</button>
            <button className="inputButtonN topbtn" onClick={()=>{addNumber(2)}}>2</button>
            <button className="inputButtonN topbtn" onClick={()=>{addNumber(3)}}>3</button>
            <button className="inputButtonN" onClick={()=>{addNumber(4)}}>4</button>
            <button className="inputButtonN" onClick={()=>{addNumber(5)}}>5</button>
            <button className="inputButtonN" onClick={()=>{addNumber(6)}}>6</button>
            <button className="inputButtonN" onClick={()=>{addNumber(7)}}>7</button>
            <button className="inputButtonN" onClick={()=>{addNumber(8)}}>8</button>
            <button className="inputButtonN" onClick={()=>{addNumber(9)}}>9</button>
            <button className="inputButtonN" onClick={()=>{addNumber(0)}}>0</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('Q')}else{addNumber('q')} }}>{Upper ? 'Q' : 'q'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('W')}else{addNumber('w')} }}>{Upper ? 'W' : 'w'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('E')}else{addNumber('e')} }}>{Upper ? 'E' : 'e'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('R')}else{addNumber('r')} }}>{Upper ? 'R' : 'r'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('T')}else{addNumber('t')} }}>{Upper ? 'T' : 't'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('Y')}else{addNumber('y')} }}>{Upper ? 'Y' : 'y'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('U')}else{addNumber('u')} }}>{Upper ? 'U' : 'u'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('I')}else{addNumber('i')} }}>{Upper ? 'I' : 'i'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('O')}else{addNumber('o')} }}>{Upper ? 'O' : 'o'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('A')}else{addNumber('a')} }}>{Upper ? 'A' : 'a'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('S')}else{addNumber('s')} }}>{Upper ? 'S' : 's'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('D')}else{addNumber('d')} }}>{Upper ? 'D' : 'd'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('F')}else{addNumber('f')} }}>{Upper ? 'F' : 'f'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('G')}else{addNumber('g')} }}>{Upper ? 'G' : 'g'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('H')}else{addNumber('h')} }}>{Upper ? 'H' : 'h'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('J')}else{addNumber('j')} }}>{Upper ? 'J' : 'j'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('K')}else{addNumber('k')} }}>{Upper ? 'K' : 'k'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('L')}else{addNumber('l')} }}>{Upper ? 'L' : 'l'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('P')}else{addNumber('p')} }}>{Upper ? 'P' : 'p'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('Z')}else{addNumber('z')} }}>{Upper ? 'Z' : 'z'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('X')}else{addNumber('x')} }}>{Upper ? 'X' : 'x'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('C')}else{addNumber('c')} }}>{Upper ? 'C' : 'c'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('V')}else{addNumber('v')} }}>{Upper ? 'V' : 'v'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('B')}else{addNumber('b')} }}>{Upper ? 'B' : 'b'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('N')}else{addNumber('n')} }}>{Upper ? 'N' : 'n'}</button>
            <button className="inputButton" onClick={()=>{if(Upper){addNumber('M')}else{addNumber('m')} }}>{Upper ? 'M' : 'm'}</button>
            <button className="inputButton" onClick={()=>{addNumber('@')}}>@</button>
            <button className="inputButton" onClick={()=>{addNumber('#')}}>#</button>
            <button className="inputButton" onClick={()=>{addNumber('$')}}>$</button>
            <button className="inputButton" onClick={()=>{addNumber('%')}}>%</button>
            <button className="inputButton" onClick={()=>{addNumber('&')}}>{'&'}</button>
            <button className="inputButton" onClick={()=>{addNumber('*')}}>*</button>
            <button className="inputButton" onClick={()=>{addNumber('(')}}>(</button>
            <button className="inputButton" onClick={()=>{addNumber(')')}}>)</button>
            <button className="inputButton" onClick={()=>{addNumber('/')}}>/</button>
            <button className="inputButton" onClick={()=>{addNumber('+')}}>+</button>
            <button className="inputButton" onClick={()=>{addNumber('-')}}>-</button>
            <button className="inputButton" onClick={()=>{addNumber('!')}}>!</button>
            <button className="inputButton" onClick={()=>{addNumber('=')}}>=</button>
            <button className="inputButton" onClick={()=>{addNumber('>')}}>{'>'}</button>
            <button className="inputButton" onClick={()=>{addNumber('<')}}>{'<'}</button>
            <button className="inputButton" onClick={()=>{addNumber('?')}}>?</button>
            <button className="inputButton" onClick={minus}><i class="fa fa-backward" aria-hidden="true"></i></button>
            <button className="inputButton" onClick={Allminus}><i class="fa fa-fast-backward" aria-hidden="true"></i></button>
            <button className="inputButton" onClick={UpperLower}><i class="fa fa-refresh" aria-hidden="true"></i></button>
          </div>     
        </div>
      :
        <div id='inputBox1'>
            <h5 id="titleBox">select Account Number</h5>
            <div className='AutoLogin' onClick={selectNumber}>
                <div className='ALLogo'>Pas</div>
                <p className='ALP'>{' '}<i class="fa fa-phone"></i> {Number} </p>
            </div>
        </div>
      }
    </div>
  )
}

export default AutoLogin