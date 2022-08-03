import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import './App.css';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Mobile Banking Calculator</Navbar.Brand>
        </Container>
      </Navbar>
    <Body />
      <Navbar fixed="bottom" bg="dark" variant="dark" >
      <Container>
          <Navbar.Brand >Copyright &copy; Md. Hasib Nadim</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
