import React, {Fragment} from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = ({loading, users}) => {
    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem user={user} key={user.id}/>
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users