import React, {useContext, useState} from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
    const [search_text, setSearch_text] = useState('')

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const {clearUsers, searchFunction, users} = githubContext
    const {setAlert} = alertContext


    const onSubmit = (e) => {
        e.preventDefault()
        if (search_text === '') {
            setAlert('Please Enter Something', 'light')
        } else {
            searchFunction(search_text)
            setSearch_text('')
        }
    }
    const onChange = (e) => setSearch_text(e.target.value)

    return (
        <div>
            <form onSubmit={onSubmit} style={{width: '100%'}}>
                <input className='text-input'
                       type="text"
                       onChange={onChange}
                       value={search_text}
                       placeholder='Search users...'
                       name='text'/>
                <input type="submit" value='Search' className='btn btn-dark'/>
                <span>
                        {users.length >0 && (
                            <button onClick={clearUsers} className='btn text-dark bold'>Clear</button>
                        )}
                    </span>
            </form>
        </div>
    )
}
export default Search

