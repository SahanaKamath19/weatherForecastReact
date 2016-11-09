import React, { Component } from 'react';
import Header from './Header'
import Search from './Search'
import axios from 'axios'
class App extends Component {
constructor(){
    super();
    this.state={
        data:'',
        loading:true
    }
}

componentWillMount(){
    axios.get('http://localhost:8080/').then((res)=>{
        //console.log(res);
        this.setState({
            data:res.data,
            loading:false
        })
    })
}
  render() {
      if(this.state.loading){
          return<div>Loading........</div>
      }else{
            let date =this.state.data[0].date;
            let newDate = Date(date);
            console.log(newDate.substring(0,15));
      }
    return (
        <div>
         <Header />
            <div className="container">
                <Search />
            </div>
        </div>
         
    );
  }
}

export default App;
