import React, {useContext, useEffect} from "react";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const User = ({match}) => {

    const githubContext = useContext(GithubContext)
    const {getUser, user, loading} = githubContext

    useEffect(() => {
        getUser(match.params.login)
        //eslint-disable-next-line
    }, [])

    const {
        name,
        avatar_url,
        html_url,
        location,
        email,
        hireable,
        bio,
        twitter_username,
        public_repos,
        followers,
        following,
    } = user

    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div className='text-center'>
                <div className='card display-inline-block' style={{maxWidth: '300px', minWidth: '300px'}}>
                    <img src={avatar_url} alt="" className="img-circle text-center" style={{width: '250px'}}/>
                    <div style={{textAlign: 'left'}}>
                        <h2>{name}</h2>
                        <h3 className='font-weight-lighter opacity-700'>{match.params.login}</h3>
                        <p>{bio}</p><br/>
                        <p><i
                            className="fa fa-users"/>{` ${(followers !== undefined && followers !== null) ? followers : '0'} followers . ${(following !== undefined && following !== null) ? following : '0'} following`}
                        </p>
                        <p><i
                            className='fa fa-archive'/>{` ${public_repos === undefined ? '0' : public_repos} Repositories`}
                        </p>
                        {hireable && <p><i className='fa fa-briefcase'/>{` Hireable`}</p>}
                        {(location !== undefined && location !== null) &&
                        <p><i className='fa fa-location-arrow fa-lg'/>{` ${location}`}</p>}
                        {(email !== undefined && email !== null) &&
                        <p><i className='fa fa-envelope-o'/>{` ${email}`}</p>}
                        {(twitter_username !== undefined && twitter_username !== null) &&
                        <p><i className='fa fa-twitter'/>{` @${twitter_username}`}</p>}
                        <a href={html_url} target='_blank' rel="noopener noreferrer"
                           className='btn btn-dark text-center' style={{display: 'block'}}>Visit Profile</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default User