import React, { Component } from 'react';
//import { AppRegistry, View, Image } from 'react-native';

class Description extends Component {
    render(){
        let item = this.props.description.date;
        let date = (new Date(item*1000)).toString().substr(0,10);
        return(
            <div className="descriptionTabStyle" id="tabVisible">
                <h2 className="text-center">Date: {date}</h2>
                <ul>
                    <li>Temperature: {this.props.description.temp} °C</li>
                    <li>Minimum Temperature: {this.props.description.tempMin} °C</li>
                    <li>Maximum Temperature: {this.props.description.tempMax} °C</li>
                    <li>Humidity: {this.props.description.humidity}%</li>
                    <li>Description: {this.props.description.description}</li>
                </ul>
            </div>
        )
    }
}
export default Description;

      // <View>
                    // <Image source={"http://openweathermap.org/img/w/"+{this.props.description.icon} +".png"}/>
                    // </View>