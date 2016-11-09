import React, { Component } from 'react';

class Search extends Component {
    render(){
        return(
            <div className="col-lg-6 searchStyle">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for Cities"/>
                <span className="input-group-btn">
                    <button className="btn btn-default button" type="button" onClick={this.props.onSearch}>Search!</button>
                </span>
                </div>
            </div>
        )
    }
}

export default Search;