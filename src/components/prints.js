import React from 'react';
import axios from 'axios'
import {Card,Row,Col} from 'react-bootstrap'
const rest=[]
const Print=(props)=>{
props.p.map(res=>{
  
    rest.push(
   <div className="responsiv">
  <Card  className="responsiv"  style={{ width: '35rem',color:"black"   }} >
    <Card.Body>
<Row>
  <Col className="col-md-9"><Card.Text >{res.date}</Card.Text></Col>
<Col className="col-md-3 ">
    <a  href='/' className="float-right" onClick={()=>{axios.delete(`http://127.0.0.1:7000/api/${res.id}/delete`)}} style={{color:"red"}} >Delete</a>
</Col>
</Row>
<br/>
      <Row>
    <Card.Title className="col-md-7 color " style={{textTransform:"capitalize"}}>{res.name}</Card.Title>
    <div className="col-md-1"></div> 
     <Card.Title className="col-md-4  " > <h4 className="float-right">₹ {res.amount}</h4> </Card.Title>
     </Row>
    <Card.Text>
     <div className="light"><span className="thick">NOTE: </span>{res.content}</div>
    </Card.Text>
  </Card.Body>
  
</Card>
<br/>
</div>
    )
})
return(
    <div className="">
    <div>{rest}</div>
     </div>
)
}
export default Print