import React, {useContext} from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from '../../context/github/githubContext'

const Users = () => {
    const githubContext=  useContext(GithubContext)
    const {loading, users} = githubContext

    if (loading) {
        return <Spinner/>
    }
    else {
        return (
            <div className='user-grid'>
                {users.map(user => (
                    <UserItem user={user} key={user.id}/>
                ))}
            </div>
        )
    }
}
export default Users