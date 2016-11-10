import React, { Component } from 'react';
import umbrella from './umbrella.svg';

class Description extends Component {
    
        constructor(){
            super();
            this.state={
                icon:''
            }
        }
        componentWillUpdate(){
             if((this.props.description.description).includes("rain")||(this.props.description.description).includes("cloud")){
                 this.setState({
                     icon:umbrella
                 })
            }  else{
                this.setState({
                     icon:""
                 })
            }
        }
    
    render(){
        let item = this.props.description.date;
        let date = (new Date(item*1000)).toString().substr(0,10);
        return(
            <div className="descriptionTabStyle" id="tabVisible">
            <button className="closeButton" onClick={this.props.handleClose}>CLOSE X</button>
                <h2 className="text-center">Date: {date} <img src={"http://openweathermap.org/img/w/"+this.props.description.icon+".png"}/></h2> 
                <div className="description">
                <ul>
                    <li>Temperature: {this.props.description.temp} °C</li>
                    <li>Minimum Temperature: {this.props.description.tempMin} °C</li>
                    <li>Maximum Temperature: {this.props.description.tempMax} °C</li>
                    <li>Humidity: {this.props.description.humidity}%</li>
                    <li>Description: {this.props.description.description}</li>
                </ul>
                </div>
                <div className="descriptionIcon">
                     <img src={this.state.icon} className="Header-logo" alt="logo" /> 
                </div>
            </div>
        )
    }
}
export default Description;