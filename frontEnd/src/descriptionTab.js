import React, { Component } from 'react';

class Description extends Component {
    render(){
        return(
            <div className="descriptionTabStyle">
                <h2>Date: {this.props.description.date}</h2>
                <ul>
                    <li>Temperature: {this.props.description.temp}</li>
                    <li>Minimum Temperature: {this.props.description.tempMin}</li>
                    <li>Maximum Temperature: {this.props.description.tempMax}</li>
                    <li>Humidity: {this.props.description.humidity}</li>
                    <li>Description: {this.props.description.description}</li>
                </ul>
            </div>
        )
    }
}
export default Description;