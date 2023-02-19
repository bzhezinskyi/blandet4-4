import UsersList from 'components/UsersList/UsersList';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { feachUsers } from 'redux/users/users.operation';
import { selectUsers } from 'redux/users/users.selector';

export default function UsersPage() {
  const dispatch = useDispatch();
  const usersList = useSelector(selectUsers);

  const handleShoweUsers = () => {
    dispatch(feachUsers());
  };
  return (
    <>
      <Button variant="dark" onClick={handleShoweUsers} className="mb-4 ms-5">
        Showe users
      </Button>
      {usersList.length > 0 && <UsersList />}
    </>
  );
}
