import React from 'react'
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router ,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import UserSignUp from './components/userSignUp/userSignUp'
import SiteSignUp from './components/siteSignUp/SiteSignUp'
import Recovery from './components/Recovery/Recovery'
import DeleteAcc from './components/DeleteAcc/DeleteAcc'
const App = () => {
    return (
        <Router>
            <Header/>
                <main className="py-3">
                    <Container>
                        <Route path="/" component={Home} exact/>
                        <Route path="/userSignUp" component={UserSignUp}/>
                        <Route path="/SiteSignUp" component={SiteSignUp}/>
                        <Route path="/RecoveryAcc" component={Recovery}/>
                        <Route path="/DeleteAcc" component={DeleteAcc}/>
                    </Container>
                </main>
                <Footer/>
        </Router>
    )
}

export default App
