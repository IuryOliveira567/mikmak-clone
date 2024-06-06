import './styles/App.scss';
import 'bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavBar } from './components';

function App() {
  return (
    <>
      <div className="main-container">
        <header>
          <NavBar/>
        </header>
      </div>
    </>
  )
}

export default App
