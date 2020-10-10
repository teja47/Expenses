import React from 'react';
import { Button,Form,
} from 'react-bootstrap';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import {Row} from 'react-bootstrap'
import Print from './prints'
import Header from './header'
class View extends React.Component {
  state={
    aa:[],
    add:{'value':0}
  }
  handleFormSubmit=(event,requestType,articleID)=>{
    const name=event.target.elements.name.value
    const amount=event.target.elements.amount.value
    const content=event.target.elements.content.value
    const date=event.target.elements.date.value
    
    switch ( requestType){
      case 'post':
        axios.post ('http://127.0.0.1:7000/api/create/',{
          name:name,
          amount:amount,
          content:content,
          date:date
        })
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }
  }
render(){
   this.state.aa = this.props.data 
   for(const d of this.props.data){
     this.state.add.value=d.amount+this.state.add.value
   }
   console.log(this.state.add.value
    )
  return (<div  >

<Header data={this.state.add.value}/>  

      <div style={{backgroundColor:"#6600ff",color:"white"}} >
    <Row className=" container  "  style={{marginTop:40}}>
    <br/>
    <br/>
    <div className="col-md-2"></div>
    <div className="col-md-5 ">
    <Form className=" container justify-content-start padTop fixed col-md-3 " onSubmitCapture={(event)=> this.handleFormSubmit(event,this.props.requestType,this.props.articleID)} >
   <br/> <br/> <br/>
  <Form.Group >
    <Form.Control  name="name" type="text" placeholder="Title" style={{backgroundColor:"#6600ff",color:"white",textTransform:"capitalize"}} />
  </Form.Group>
  <Form.Group >
    <Form.Control name="amount" type="number" placeholder="Amount" style={{backgroundColor:"#6600ff",color:"white"}} />
  </Form.Group>
  <Form.Group >
    <Form.Control name="content" type="text" placeholder="Note"  style={{backgroundColor:"#6600ff",color:"white"}} />
  </Form.Group>
  <Form.Group >
    <Form.Control name="date" type="date" placeholder="Date" style={{backgroundColor:"#6600ff",color:"white"}}  />
  </Form.Group>
  <Button style={{backgroundColor:"#00e6b8",color:"black",borderColor:"#00e6b8"}} className="button" htmlType="submit" type="submit">
    + ADD EXPENSE
  </Button>
  <br/>
</Form>
</div>
<div className="col-md-1"></div>
<div className="col-md-4 " style={{marginTop:70}}>
  <Print p={this.state.aa}  />
 </div>
    </Row>
    </div> </div>
  )
}
}
export default View