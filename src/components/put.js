import React from 'react'
import View from './view'
import axios from 'axios'
class Put extends React.Component{
    state={
        data:[]
      }
      componentDidMount(){
     
        axios.get(`http://127.0.0.1:7000/api/`)
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
      }

      
render(){
    return( <div> 
        <div> </div>
            {/* <View  requestType="put" articleID={this.props.match.params.articalID} dat={this.state.data}  /> */}
            </div>)
}

      }

      export default Put