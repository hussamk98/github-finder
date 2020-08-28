import React, {Fragment} from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import Alert from "../layout/Alert";

const Users = ({loading, users, setAlert}) => {
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