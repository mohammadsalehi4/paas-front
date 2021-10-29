import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './delByLink.css'
import Address from '../../Address'
const DelByLink = (props) => {
    const [desc,SetDesc]=useState('Loading...')
    
    useEffect(()=>{
        const Email=props.match.params.Email
        const code=props.match.params.code
        axios.get(Address+`/DelByLink/${Email}/${code}`)
        .then(response=>{
            if(response.data.success===true){
                SetDesc('Account deleted Succesfully!')
            }
            else{
                SetDesc('Unsuccessful!')
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return (
        <div className="mainDiv">
            <div id="description1">{desc}</div>    
            
            <Button id="Back" onClick={()=>{window.location.assign("http://localhost:3000")}}>Back to main page</Button>
        </div>
    )
}

export default DelByLink