import React, { Component } from 'react';

class Search extends Component {
    render(){
        return(
            <div className="searchStyle">

                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for City (e.g. Toronto)" onChange={this.props.handleChange}/>
                <span className="input-group-btn">
                    <button className="btn button" type="button" onClick={this.props.handleSearch}>Search!</button>
                </span>
                </div>
            </div>
        )
    }
}

export default Search;