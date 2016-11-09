import React, { Component } from 'react';
import Header from './Header'
import Search from './Search'
import axios from 'axios'


class App extends Component {
constructor(){
    super();
    this.state={
        data:'',
        loading:true,
        temp:''
    }
}

componentWillMount(){
    axios.get('http://localhost:8080/').then((res)=>{
        //console.log(res);
        this.setState({
            data:res.data,
            temp:res.data.map((item)=>{
                return {"temper":item.temp,"dateReturn":item.date};
            }),
            loading:false
            
        })

    })
}

onSearch(e){
    e.preventDefault();
    console.log("Send the City value to the server");
}

  render() {
     
      if(this.state.loading){
          return<div>Loading........</div>
      }else{
            // let date =this.state.data[0].date;
            // let newDate = Date(date);
            // console.log(newDate.substring(0,15));
            // console.log(this.state.data[0].temp);
        //console.log(this.state.temp);
      }
      let dataSet =  this.state.temp;
      let leftValue = dataSet.length;
    return (
        <div>
         <Header />
            <div className="container">
                <Search onSearch={this.onSearch}/>
                <div className="graphContainer">
                    
                    { dataSet.map((item, i)=>{
                            let style = {
                                bottom: item.temper-4,
                                left: (leftValue + 110) *(i+1)
                            }
                             return(
                            <div style={style} className="round">
                                <span className="label">{item.temper} °C  {(new Date(item.dateReturn*1000)).toString().substr(0,10)}</span>
                            </div>)
                        })}
                    

                </div>
            </div>
            
        </div>
         
    );
  }
}

export default App;
