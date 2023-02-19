import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { featchUserDetails } from 'redux/users/users.operation';
import { selectUserDetails } from 'redux/users/users.selector';

export default function UserDetailsPage() {
  const location = useLocation();

  const dispatch = useDispatch();
  const user = useSelector(selectUserDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(featchUserDetails(id));
  }, [dispatch, id]);

  //TODO

  const handleDelete = () => {};
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
              <Button variant="dark" onClick={handleDelete}>
                Delete
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
