import React from 'react';
import {  Navbar
} from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap'
import './style.css'
class Header extends React.Component{

render(){
    return(  <Navbar className="fixed-top navbar  " style={{backgroundColor:"#6600ff",color:"white"}}  >
      <br/>
      <br/>
      <Col className="col-md-2 d-none d-md-block "></Col>
  <Col className="col-6 col-md-3" style={{marginTop:25}} ><h2>MY EXPENSES</h2></Col>
  <div className=" col-md-7 col-1 ">
    <Row>
      <Col className="col-md-5"></Col>
<Col className="col-md-2" >
 <h4> TOTAL: </h4>
</Col>
<Col className="col-md-3 flexEnd"> <h3>{this.props.data} </h3>  </Col> </Row>
</div>
 </Navbar>
    )
}


}
export  default Header