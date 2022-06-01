import axios from 'axios'
import React,{useEffect,useState} from 'react'
import SiteBox from '../SiteBox/SiteBox'
import './Dashboard.css'
import Address from '../../Address'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Dashboard = () => {

    const States = useSelector(state => state);
    const dispatch = useDispatch();
    
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

    const onetime=new Date()
    const [AddedSites,setAddedSites]=useState([])
    const [faza,SetFaza]=useState(0)
    useEffect(()=>{
        const token=getCookie('token')
        axios.post(Address+'/userinfo',{
        },{
        headers:{
                authorization:token
            }
        })
        .then(response=>{
           
            if(response.data.success===true){
                setAddedSites([])
                if(response.data.sites.length===0){
                    window.location.assign("/addNewSite")
                }
                for(let i=0;i< response.data.sites.length;i++){
                    SetFaza(i+1)
                    setAddedSites(AddedSites=>[...AddedSites,
                        {
                            Address:response.data.sites[i].SiteAddress,
                            Username:response.data.sites[i].username,
                            boxNumber:(i)
                        }
                    ])
                }
                
            }
        })
        function countrt(){
            setTimeout(function(){
                const time=new Date()
                dispatch({type:"CHANGENOW",value:Math.floor(time.getTime()/1000)})
                countrt()
            },1000)
        }
        countrt()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    
    return (
        <div id="DashHome">
            {
                AddedSites.map((item,index)=>{
                    return(
                        <div id="dashBOX">
                            <SiteBox boxID={item.boxNumber} Address={item.Address} Username={item.Username} key={item.Address} index={index}/>
                            <div id="notif">copied to ClipBoard</div>
                        </div>
                    )
                })
            }
            {faza===1 ? <div id="faza"></div> : null}
        </div>
    )
}

export default Dashboard
