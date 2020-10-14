import React from 'react'
import View from './view'
import axios from 'axios'
class Home extends React.Component{

state={
    da:[]
}

componentDidMount(){
    axios.get('https://ex-my-app.herokuapp.com/api/')
    .then(res=>{
        this.setState({
            da:res.data
        })
        console.log(this.state.da)
    })
}

render(){

  
    return(
        <div>
 <View requestType="post" articleID={null} data={this.state.da} /> </div>)
}

}

export default Home