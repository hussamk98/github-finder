import React from "react";

const UserItem = ({user: {avatar_url, login, html_url}}) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="img-circle" style={{width: '80px'}}/>
            <h3 style={{textTransform: 'capitalize'}}>{login}</h3>
            <a href={html_url} className="btn btn-dark" target="_blank" rel="noopener noreferrer">View</a>
        </div>
    )
}

export default UserItem