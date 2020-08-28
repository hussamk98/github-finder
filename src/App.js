import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import './App.css'

class App extends Component {
    state = {
        users: [],
        user: {},
        loading: false,
        alert: null
    }

    searchFunction = async search_text => {
        this.setState({loading: true, alert: null})
        let users
        try {
            users = await axios.get(`https://api.github.com/search/users?q=${search_text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
            this.setState({loading: false, users: users.data.items})
            if(users.data.items.length===0) this.setAlert('No results found', 'danger')
        } catch (err) {
            this.setState({loading: false, alert: {msg: 'Something went wrong!', type: 'danger'}})
            console.log(err)
        }
    }
    getUser = async username => {
        this.setState({loading: true, alert: null})
        let user
        try {
            user = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
            this.setState({loading: false, user: user.data})
        } catch (err) {
            this.setState({loading: false, alert: {msg: 'Something went wrong!', type: 'danger'}})
            console.log(err)
        }
    }
    clearUsers = () => this.setState({users: [], user: {}, loading: false})
    setAlert = (msg, type) => {
        this.setState({alert: {msg, type}})
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                    <div className="container">
                        <Switch>
                            <Route exact path='/' render={props => (
                                <Fragment>
                                    <Alert alert={this.state.alert}/>
                                    <Search searchFunction={this.searchFunction}
                                            showClear={this.state.users.length > 0}
                                            clearUsers={this.clearUsers} setAlert={this.setAlert}/>
                                    <Users loading={this.state.loading} users={this.state.users}
                                           setAlert={this.setAlert}/>
                                </Fragment>
                            )}/>
                            <Route exact path='/user/:login' render={props => (
                                <User user={this.state.user} getUser={this.getUser} {...props}
                                      loading={this.state.loading}/>
                            )}/>
                            <Route exact path='/about' component={About}/>
                        </Switch>
                    </div>
                </div>
            </Router>

        );
    }
}

export default App;
