import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './App.css'

const App = () => {
    return (
        <AlertState>
            <GithubState>
                <Router>
                    <div className="App">
                        <Navbar/>
                        <div className="container">
                            <Switch>
                                <Route exact path='/' render={props => (
                                    <Fragment>
                                        <Alert/>
                                        <Search/>
                                        <Users/>
                                    </Fragment>
                                )}/>
                                <Route exact path='/user/:login' render={props => (
                                    <User {...props}/>
                                )}/>
                                <Route exact path='/about' component={About}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </GithubState>
        </AlertState>
    );
}


export default App;
