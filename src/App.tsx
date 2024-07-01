import './styles/App.scss';
import 'bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavBar, MainPane, PartnersPane } from './components';

function App() {
  return (
    <>
      <div className="main-container">
        <header>
          <NavBar/>
        </header>
        <main>
          <MainPane/>
        </main>
        <section>
          <PartnersPane/>
        </section>
      </div>
    </>
  )
}

export default App
