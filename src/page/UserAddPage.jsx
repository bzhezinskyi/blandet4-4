import { useReducer } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/users/users.operation';

const initState = { name: '', phone: '', email: '', avatar: '', pet: '' };

function formReduser(state, { type, payload }) {
  return (state = { ...state, [type]: payload });
}

export default function UserAddPage() {
  const navigate = useNavigate();
  const [state, reduserDispatch] = useReducer(formReduser, initState);
  const { name, phone, email, avatar, pet } = state;
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    reduserDispatch({ type: name, payload: value });
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    const user = await dispatch(addUser(state)).unwrap();
    user && navigate(`/users/${user.id}`);
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

      <Button variant="dark" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
