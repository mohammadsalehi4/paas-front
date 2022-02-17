import React from 'react'
import './Home.css'
import axios from 'axios'
import Address from '../../Address'
import { useState,useEffect } from 'react'

const Home = () => {

    const [PassWord,SetPassWord]=useState('')
    const [showPassWord,SetShowPassWord]=useState('Password...')
    const [Upper,SetUpper]=useState(true)

    function setCookie(cname, cvalue, exhours) {
        var d = new Date();
        d.setTime(d.getTime() + (exhours*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    useEffect(()=>{
        if(PassWord!==''){
            SetShowPassWord(PassWord)
        }else{
            SetShowPassWord('Password...')
        }
    },[PassWord])
    
    const UserLogin=()=>{
        const Numb=document.getElementById('getNumber').value
        const Pass=PassWord
        axios.post(Address+'/login',{
            'Number':String(Numb),
            'password':Pass
        })
        .then(response=>{
            if(response.data.success===true){
                document.getElementById('getNumber').value=''
                setCookie('token','Bearer '+response.data.token,1)
                setCookie('mode','user',1)
                window.location.reload()
            }
            else{
                document.getElementById('getNumber').value=''
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="Login failed"
                document.getElementById('notif').style.opacity="0.6"
                SetPassWord('')
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                },4000)
            }
        })
        .catch(err=>{
            console.log(err)
        })
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
    
    return (
        <div className="mainDiv">
            <div id="notif"></div>
            <div id="newInputBox">
                <h5 id="titleBox">login</h5>
                <input placeholder="Phone Number..." type="text" className="inp1" id="getNumber"/>
                <input placeholder={showPassWord} disabled type="text" className="inp1"/>

                <button className="inp2" id="getCode1" onClick={UserLogin}>Login</button>
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
            <div id="description11">
                <p className="descP"><h1 className="about">About</h1><br/>
                This program gives dynamic password capability to different sites.<br/><br/>
                When logging in to sites that use this service, in addition to the password, you will also need a second dinamic password that is obtained from this service.<br/><br/>
                When entering a password, you should use the site keyboard for extra security<br/><br/>
                All database data is stored encrypted and not decrypted, so it is guaranteed that all data will be completely secure. </p><br/>
                <p>You can see full instructions and how the service works on <a href='/Description'>this page</a></p>
                
            </div>
        </div>
    )
}


export default Home
