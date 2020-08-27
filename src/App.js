import React, {Component} from 'react';
import axios from 'axios'
import Navbar from "./components/layout/Navbar";
import './App.css'
import Users from "./components/users/Users";
import Search from "./components/users/Search";

class App extends Component {
    state = {
        users: [],
        loading: false
    }
    // async componentDidMount() {
    //     this.setState({ loading: true })
    //     let users
    //     try {
    //         users = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //         this.setState({ loading: false, users: users.data })
    //     } catch (err) {
    //         console.log(err)
    //     }
    //
    // }

    searchFunction = async search_text => {
        this.setState({loading: true})
        let users
        try {
            users = await axios.get(`https://api.github.com/search/users?q=${search_text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
            this.setState({loading: false, users: users.data.items})
        } catch (err) {
            console.log(err)
        }
    }
    clearUsers = () => this.setState({users: [], loading: false})

    render() {
        return (
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Search searchFunction={this.searchFunction} showClear={this.state.users.length > 0 ? true : false}
                            clearUsers={this.clearUsers}/>
                    <Users loading={this.state.loading} users={this.state.users}/>
                </div>
            </div>
        );
    }
}

export default App;
