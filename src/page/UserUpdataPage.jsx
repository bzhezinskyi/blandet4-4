import { useReducer } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { editUser } from 'redux/users/users.operation';

function formReduser(state, { type, payload }) {
  return (state = { ...state, [type]: payload });
}

export default function UserUpdataPage() {
  const location = useLocation();
  const initState = location.state.user;

  const navigate = useNavigate();
  const [state, reduserDispatch] = useReducer(formReduser, initState);
  const { id, name, phone, email, avatar, pet } = state;
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    reduserDispatch({ type: name, payload: value });
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    dispatch(editUser(state));
    navigate(`/users/${id}`);
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Avatar</Form.Label>
        <Form.Control
          type="url"
          name="avatar"
          value={avatar}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Pet</Form.Label>
        <Form.Control
          type="text"
          name="pet"
          value={pet}
          onChange={handleChange}
        />
      </Form.Group>

      <Button
        as={Link}
        to={`/users/${id}`}
        variant="secondary"
        className="mx-2"
      >
        Cansel
      </Button>
      <Button
        variant="dark"
        type="submit"
        onClick={handleSubmit}
        className="mx-2"
      >
        Updata
      </Button>
    </Form>
  );
}
