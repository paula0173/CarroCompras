import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const ToastUtility = ({ initialState }) => {

  const [show, setShow] = useState(initialState);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide className="d-inline-block m-1"
          bg="primary">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Aviso</strong>
            <small>Pagando</small>
          </Toast.Header>
          <Toast.Body className="Primary"></Toast.Body>
        </Toast>
      </Col>
  
    </Row>
  );
}
export default ToastUtility;