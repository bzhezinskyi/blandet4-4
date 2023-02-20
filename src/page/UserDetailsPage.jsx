import { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteUser, featchUserDetails } from 'redux/users/users.operation';
import { selectUserDetails } from 'redux/users/users.selector';

export default function UserDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector(selectUserDetails);
  const { id } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(featchUserDetails(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteUser(id));
    navigate('/users', { replace: true });
  };
  return (
    <>
      {user && (
        <>
          <Button
            as={Link}
            to={location?.state?.from ?? '/'}
            variant="dark"
            className="mb-4 ms-5"
          >
            Go back
          </Button>
          <h2>{user.name}</h2>
          <Row>
            <Col xs={6} md={4}>
              <img src={user.avatar} alt={user.name} width="150" />
            </Col>
            <Col>
              <p>
                <b>Email:</b> {user.email}
              </p>
              <p>
                <b>Phone:</b> {user.phone}
              </p>
              <p>
                <b>Pet:</b> {user.pet}
              </p>
              <Button variant="dark" onClick={handleShow}>
                Delete
              </Button>
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Delete <b>{user.name}</b>?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>You really want to delete this user?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="dark" onClick={handleDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}
