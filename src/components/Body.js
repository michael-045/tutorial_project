import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import Sidebar from './Sidebar';

export default function Body({ sidebarBool, children} ) {
  return (
    <Container>
      <Stack direction="horizontal" className="Body">
          { sidebarBool && <Sidebar />}
          <Container className='Content'>
            {children}
          </Container>
      </Stack>
    </Container>
  );
}