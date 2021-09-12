import React,{useState,useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container,Navbar,Nav } from 'react-bootstrap'
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
        window.location.assign("http://localhost:3000")
    }
    
    useEffect(()=>{
        setLogin(props.isLogin)
    },[props])
    
    return (
        <header>
            <Navbar className="nav-bg" variant="light">
                <Container>
                    <LinkContainer to="/" id="a1">
                        <Navbar.Brand id="Title" >
                            <h2>Paas</h2> 
                        </Navbar.Brand>
                    </LinkContainer>        
                    {isLogin===false ? 
                        <Nav className="myNav"> 
                            <LinkContainer className="myLink" to="/userSignUp">
                                <Nav.Link >
                                    User SignUp{' '}
                                    <i className="fa fa-user-o" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="myLink" to="/SiteSignUp">
                                <Nav.Link >
                                    Site SignUp{' '}
                                    <i className="fa fa-internet-explorer" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="myLink" to="/RecoveryAcc">
                                <Nav.Link >
                                    Recovery Account{' '}
                                    <i className="fa fa-history" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="myLink" to="/DeleteAcc">
                                <Nav.Link >
                                    Delete Account {' '}
                                    <i className="fa fa-trash"></i>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    :
                    
                    <Nav className="myNav">
                        {mode==='user' ? 
                            <LinkContainer className="myLink" to="/addNewSite" >
                                <Nav.Link >
                                    add new site {' '}<i class="fa fa-paperclip" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                        : null}
                        {mode==='user' ? 
                            <LinkContainer className="myLink" to="/addEmail" >
                                <Nav.Link >
                                    add Email {' '}<i class="fa fa-envelope-open-o" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                        : null}
                        {mode==='user' ? 
                            <LinkContainer className="myLink" to="/changeNumber" >
                                <Nav.Link >
                                    change Number{' '} <i class="fa fa-pencil" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                        : null}
                        {mode==='user' ? 
                            <LinkContainer className="myLink" to="/deleteAccount" >
                                <Nav.Link >
                                    Delete Account {' '}<i class="fa fa-times" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                        : null}
                        <LinkContainer className="myLink" to="/" onClick={siteExit}>
                            <Nav.Link >
                                logOut {' '}<i class="fa fa-sign-out" aria-hidden="true"></i>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>}
                        
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
