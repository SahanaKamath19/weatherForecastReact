import React, { Component } from 'react';

class Description extends Component {
    render(){
        let item = this.props.description.date;
        let date = (new Date(item*1000)).toString().substr(0,10);
        return(
            <div className="descriptionTabStyle" id="tabVisible">
                <h2 className="text-center">Date: {date}</h2>
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