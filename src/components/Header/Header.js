import React,{useState,useEffect} from 'react'
import './Header.css'

const Header = (props) => {
    
    function setCookie(cname, cvalue, exhours) {
        var d = new Date();
        d.setTime(d.getTime() + (exhours*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
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
    
    const [isLogin,setLogin]=useState(props.isLogin)
    const mode=props.mode
    
    const siteExit=()=>{
        const token=getCookie('token')
        const mode=getCookie('mode')
        setCookie('token',token,0)
        setCookie('mode',mode,0)
        setLogin(false)
        window.location.assign("/")
    }
    
    useEffect(()=>{
        setLogin(props.isLogin)
    },[props])

    return (
        <header>
            <h2 id="pas"><a href="/" id="pasLink">Pas</a><p id='psolp'>providing more security of login proccess</p></h2> 
            {isLogin===false ? 
            <div id="menuBox">
                <div id="menu" className='homeMenu'><i class="fa fa-navicon"></i></div>
                
                <a href='/userSignUp' id='ju'>not register? join us!{'  '}<i class="fa fa-pencil"></i></a>
                <div id="menuItems">
                    <a className="navLink" href="/">Home{' '}<i class="fa fa-home"></i></a>
                    <a className="navLink" href="/siteLogin">site login{' '}<i class="fa fa-sign-in"></i></a>
                    <a className="navLink" href="/userSignUp">user signup{' '}<i class="fa fa-male"></i></a>
                    <a className="navLink" href="/SiteSignUp">site signup{' '}<i class="fa fa-sitemap"></i></a>
                    <a className="navLink" href="/DeleteAcc">Delete Acc{' '}<i class="fa fa-trash"></i></a>

                </div>
            </div>
            :  
            <div id="menuBox">
                <div id="menu" className='homeMenu'><i class="fa fa-navicon"></i></div>
                <div id="menuItems">
                <a href="/" onClick={siteExit} className="navLink firstLink logout">
                    logOut{' '}<i class="fa fa-sign-out"></i>
                </a>
                {mode==='user' ? 
                    <a href="/addNewSite" className="navLink">
                        add new site{' '}<i class="fa fa-pencil-square-o"></i>
                    </a>
                : null}
                {mode==='user' ? 
                    <a href="/addEmail" className="navLink">
                        add Email{' '}<i class="fa fa-pencil-square-o"></i>
                    </a>
                : null}
                {mode==='user' ? 
                    <a href="/changeNumber" className="navLink">
                        change Number{' '}<i class="fa fa-pencil-square-o"></i>
                    </a>
                : null}

                </div>
            </div>
        }
        </header>
    )
}
export default Header
