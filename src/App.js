import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { BrowserRouter as Router ,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import UserSignUp from './components/userSignUp/userSignUp'
import SiteSignUp from './components/siteSignUp/SiteSignUp'
import Recovery from './components/Recovery/Recovery'
import DeleteAcc from './components/DeleteAcc/DeleteAcc'
import Header from './components/Header/Header'
import SiteHome from './components/SiteHome/SiteHome'
import Dashboard from './components/Dashboard/Dashboard'
import AddEmail from './components/AddEmail/AddEmail'
import AddNewSite from './components/AddNewSite/AddNewSite'
import ChangeNumber from './components/ChangeNumber/ChangeNumber'
import SiteLogin from './components/SiteLogin/siteLogin'
import siteRecovery from './components/siteRecovery/siteRecovery'
import ChangePassword from './components/changePassword/changePassword'
import DelByLink from './components/delByLink/delByLink'
import SetNumber from './components/setNumber/SetNumber'
import Address from './Address'
import Description from './components/Description/Description'

const App = () => {

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
    
    const [login,setlogin]=useState(false)
    const [mode,setMode]=useState('')
    
    useEffect(()=>{
        console.log('Address:'+Address)
        const getToken=getCookie('token')
        const getMode=getCookie('mode')

        if(getToken&&getMode){
            axios.post(Address+'/getdata',{
                'mode':getMode,
                'token':getToken
            })
            .then(response=>{
                if(response.data.find===true){
                    setlogin(true)
                    setMode(getMode)
                }else{
                    setlogin(false)
                    setCookie('token',getToken,0)
                    setCookie('mode',getMode,0)
                    window.location.assign('/')
                }
            })
        }
    },[])
    
    return (
        <Router>
            <Header isLogin={login} mode={mode}/>
                <main className="py-3">
                    {!login ? <Route path="/" component={Home} exact/> 
                    : ( mode==='site' ? 
                        <Route path="/" component={SiteHome} exact/>
                    : mode==='user' ? 
                        ( <Route path="/" component={Dashboard} exact/>) 
                    : <Route path="/" component={Home} exact/>)}
                    <Route path="/userSignUp" component={UserSignUp}/>
                    <Route path="/SiteSignUp" component={SiteSignUp}/>
                    <Route path="/RecoveryAcc" component={Recovery}/>
                    <Route path="/DeleteAcc" component={DeleteAcc}/>
                    <Route path="/addEmail" component={AddEmail}/>
                    <Route path="/changeNumber" component={ChangeNumber}/>
                    <Route path="/addNewSite" component={AddNewSite}/>
                    <Route path="/siteLogin" component={SiteLogin}/>
                    <Route path="/siteRecovery" component={siteRecovery}/>
                    <Route path="/Description" component={Description}/>
                    <Route path="/changePassword/:mode/:ID/:code" component={ChangePassword}/>
                    <Route path="/delByLink/:Email/:code" component={DelByLink}/>
                    <Route path="/SetNumber/:lastNumber/:newNumber/:code" component={SetNumber}/>
                </main>
            <Footer/>
        </Router>
    )
}


export default App
