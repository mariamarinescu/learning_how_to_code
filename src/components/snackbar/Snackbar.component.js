import React, { useState, useLayoutEffect } from 'react';
import { Toast, Row, Col, Button } from 'react-bootstrap';

export default function Example(props) {
  const [showA, setShowA] = useState(true);
  const [counter, setCounter] = useState(0)


  const toggleShowA = () => setShowA(false);

  useLayoutEffect(() => {
      if(props.show === true && showA === false) {
        toggleShowA(true);
      }
  })

  return (
  
    <React.Fragment>
      <Col xs={6}>
        <Toast show={showA} onClose={toggleShowA} style={{ position: 'fixed', top: '70px', left: '80px', zIndex: '10', padding: '0', margin: '0', width: '15%',height: 'fit-content', backgroundColor: '#303030	', color: 'white', minWidth: '133px' }}>
          <Toast.Header>
          
            <strong className="mr-auto">Notice</strong>
          </Toast.Header>
          <Toast.Body><strong>This is my 'minimum viable product'</strong>. Full responsiveness  && some bug fixes are <strong>under construction</strong>! It will be done shortly. <strong>Hang with me 😃</strong> </Toast.Body>
        </Toast>
      </Col>
    </React.Fragment>

  );
}

