import Navigation from 'components/Navigation/Navigation';
import { Container } from 'react-bootstrap';
import { Outlet, useParams } from 'react-router-dom';

export default function Layout() {
  const { id } = useParams();
  return (
    <>
      <header>{!id && <Navigation />}</header>
      <main>
        <Container className="py-2">
          <Outlet />
        </Container>
      </main>
    </>
  );
}
