import axios from 'axios'
import React,{useEffect,useState} from 'react'
import SiteBox from '../SiteBox/SiteBox'
import './Dashboard.css'
const Dashboard = () => {
    
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
    const [now,setNow]=useState(Math.floor(onetime.getTime()/1000))   
    
    useEffect(()=>{
        const token=getCookie('token')
        axios.post('http://localhost:4000/userinfo',{
        },{
        headers:{
                authorization:token
            }
        })
        .then(response=>{
           
            if(response.data.success===true){
                setAddedSites([])
                for(let i=0;i< response.data.sites.length;i++){
                    setAddedSites(AddedSites=>[...AddedSites,
                        {
                            Address:response.data.sites[i].SiteAddress,
                            Username:response.data.sites[i].username
                        }
                    ])
                }
                
            }
        })
        function countrt(){
            setTimeout(function(){
                const time=new Date()
                setNow(Math.floor(time.getTime()/1000))
                countrt()
            },1000)
        }
        countrt()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    useEffect(()=>{

    },[])
    
    return (
        <div>
            {
                AddedSites.map((item)=>{
                    return(
                        <SiteBox Address={item.Address} Username={item.Username} key={item.Address} now={now}/>
                    )
                })
            }
        </div>
    )
}

export default Dashboard
