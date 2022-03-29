import React from 'react'
import './userSignUp.css'
import axios from 'axios'
import Address from '../../Address'
import { useState,useEffect } from 'react'
const UserSignUp = () => {
    
    const [PassWord,SetPassWord]=useState('')
    const [showPassWord,SetShowPassWord]=useState('Password...')
    const [Upper,SetUpper]=useState(true)

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

    const signUp=()=>{
        SetLoading(true)
        const username=document.getElementById('signupUsernameInput').value
        const password=PassWord
        console.log(username+'||'+password)
        console.log(Address+'/signup')
        axios.post(Address+'/signup',{
            'Number':String(username),
            'password':password
        })
        .then(response=>{
            SetLoading(false)
            if(response.data.success===true){
                document.getElementById('signupUsernameInput').value=''
                SetPassWord('')
                document.getElementById('notif').style.display="block"
                document.getElementById('notif').innerHTML="Done!"
                document.getElementById('notif').style.opacity="0.6"
                setTimeout(()=>{
                    document.getElementById('notif').style.display="none"
                },4000)
            }else{
                if(response.data.msg==='Wrong Phone Number format'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="wrong number"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
                if(response.data.msg==='Unsuccessful'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="signup failed"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
                if(response.data.msg==='this Number is already exist'){
                    document.getElementById('signupUsernameInput').value=''
                    document.getElementById('notif').style.display="block"
                    document.getElementById('notif').innerHTML="Number exist"
                    document.getElementById('notif').style.opacity="0.6"
                    setTimeout(()=>{
                        document.getElementById('notif').style.display="none"
                    },4000)
                }
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
    
    useEffect(()=>{
        console.log(PassWord)
        if(PassWord!==''){
            SetShowPassWord(PassWord)
        }else{
            SetShowPassWord('Password...')
        }
    },[PassWord])
    
    return (
        <div  className="mainDiv">
            <div id="notif"></div>
            <div id="newInputBoxU">
                    <h5 id="titleBox">user signup</h5>
                    <input placeholder="Phone Number..." type="text" className="inp1" id="signupUsernameInput"/>
                    <input placeholder={showPassWord} disabled type="text" className="inp1" id="getNumber"/>

                {
                    !loading ?
                        <button className="inp2" id="getCode1" onClick={signUp}>SignUp</button>
                    :
                        <button className="inp2" id="getCode1" onClick={signUp}>
                            <div className='loadingCircle loadingCircle1' style={{background:`rgb(${loadingStyle}, ${loadingStyle}, ${loadingStyle})`}}></div>
                            <div className='loadingCircle loadingCircle2' style={{background:`rgb(${255-loadingStyle}, ${255-loadingStyle}, ${255-loadingStyle})`}}></div>
                        </button>
                }

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
            <div id='homeImage' ></div>
            <div id="description11" className="Dplus">
                <h1 className="about">About</h1>
                <p>Users can register on this page.<br/><br/>
                After entering the mobile number, the password must be entered by the site's dedicated keyboard in the relevant box.<br/><br/>
                The reason for using a dedicated keyboard is more security.<br/><br/>
                In the final version of the program, after registration, a text message containing the activation link will be sent to the mobile number, which must be clicked to activate.<br/><br/>
                In the current version, the account is active by default after registration.
                </p>
            </div>
        </div>
    )
}

export default UserSignUp