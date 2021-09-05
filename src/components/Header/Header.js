import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container,Navbar,Nav } from 'react-bootstrap'
import './Header.css'

const Header = () => {
    return (
        <header>
            <Navbar className="nav-bg" variant="light">
                <Container>
                    <LinkContainer to="/" id="a1">
                        <Navbar.Brand id="Title" >
                            Paas
                            
                        </Navbar.Brand>
                    </LinkContainer>                    
                        <Nav className="myNav"> 
                            <LinkContainer className="myLink" to="/userSignUp">
                                <Nav.Link >
                                    User SignUp{' '}
                                    <i class="fa fa-user-o" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="myLink" to="/SiteSignUp">
                                <Nav.Link >
                                    Site SignUp{' '}
                                    <i class="fa fa-internet-explorer" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="myLink" to="/RecoveryAcc">
                                <Nav.Link >
                                    Recovery Account{' '}
                                    <i class="fa fa-history" aria-hidden="true"></i>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="myLink" to="/DeleteAcc">
                                <Nav.Link >
                                    Delete Account {' '}
                                    <i className="fa fa-trash"></i>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
