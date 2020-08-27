import React, {Component} from "react";

class Search extends Component {
    state = {
        search_text: ''
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.searchFunction(this.state.search_text)
        this.setState({search_text: ''})
    }
    onChange = (e) => this.setState({search_text: e.target.value})

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{width: '100%'}}>
                    <input className='text-input'
                           type="text"
                           onChange={this.onChange}
                           value={this.state.search_text}
                           placeholder='Search users...'
                           name='text'/>
                    <input type="submit" value='Search' className='btn btn-dark' />
                    <span>
                        {this.props.showClear && (
                            <button onClick={this.props.clearUsers} className='btn' >Clear</button>
                        )}
                    </span>
                </form>

            </div>
        )
    }
}

export default Search

