import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastUtility = ({ initialState }) => {

  const [show, setShow] = useState(initialState);

  return (
    <Row>
      <Col xs={6}>
        <ToastContainer className="p-3" position={'middle-center'} style={{ zIndex: 1 }}  >
          <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide className="d-inline-block m-1"
            bg="success" >
            <Toast.Header>
              <strong className="me-auto">Información</strong>
            </Toast.Header>
            <Toast.Body className='text-white'>
              Pizas Pagadas!!
            </Toast.Body>

          </Toast>
        </ToastContainer>
      </Col>

    </Row>
  );
}
export default ToastUtility;