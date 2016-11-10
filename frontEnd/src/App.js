import React, { Component } from 'react';
import Header from './Header'
import Search from './Search'
import  Description from './descriptionTab'
import axios from 'axios'


class App extends Component {
constructor(){
    super();
    this.state={
        data:'',
        loading:true,
        temp:'',
        city:'Toronto',
        description:''
    }

    this.showDescription=this.showDescription.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
}

componentDidMount(){
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

handleChange(e){
    this.setState({
        city:e.target.value
    })
}

showDescription(item){
let filterValue = this.state.data.filter((data)=>{
    return item.temper===data.temp 
})
this.setState({
    description:filterValue
})
}

//send the searched value to server using handleSearch function
handleSearch(){
    console.log(this.state.city);
    //axios.post("http://localhost:8080/city",this.state.city); 
}

  render() {
     console.log(this.state.description);
      if(this.state.loading){
          return<div>Loading........</div>
      }
      let dataSet =  this.state.temp;
      let leftValue = dataSet.length;
    return (
        <div>
         <Header city={this.state.city}/>
            <div className="container">
                <Search handleChange={this.handleChange} handleSearch={this.handleSearch}/>
                <div className="graphContainer">
                    
                    { dataSet.map((item, i)=>{
                            let style = {
                                bottom: item.temper-4,
                                left: (leftValue + 110) *(i+1)
                            }
                             return(
                            <div key={i} style={style} className="round" onClick={()=>this.showDescription(item)}>
                                <span className="label">{item.temper} °C  {(new Date(item.dateReturn*1000)).toString().substr(0,10)}</span>
                            </div>)
                        })}
                </div>
                <Description description={this.state.description}/>
            </div>
            
        </div>
         
    );
  }
}

export default App;
