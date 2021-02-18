import React,{useState} from "react";
import "./styles.css";
import { Jumbotron ,Button ,Toast} from 'react-bootstrap';

 function Examples({children}) {

  const [show , setShow] =useState(true);
  return (
   <>
  
    {!show && <Button onClick={() => setShow(true)}>click </Button>}
  

    <Toast show={show} onClose={() => setShow(false)}>
    <Toast.Header>
    
      <strong className="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>{children}</Toast.Body>
  </Toast>
    </>
  );
}


const Jumbo= () =>{

return(
  <Jumbotron>
  <h1 className="App">Hello, world!</h1>
  <p> We use jumbotron ,toast, useState ,onClick function , onClose function. When in useState , (true) they show ,if false ,they don't show .
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information. 
  </p>
 
  <Examples> <p> Woohoo, you're reading this text in a Toast</p> </Examples>
</Jumbotron>
)
}

export default Jumbo

