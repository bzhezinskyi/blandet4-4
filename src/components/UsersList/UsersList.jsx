import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectUsers } from 'redux/users/users.selector';

export default function UsersList() {
  const location = useLocation();
  const usersList = useSelector(selectUsers);
  return (
    <ListGroup as="ol" numbered>
      {usersList.map(({ id, name }) => (
        <ListGroup.Item key={id} as="li">
          <Link
            to={id}
            state={{ from: location }}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <b>{name}</b>
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
