import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Arrow from './Components/Arrow/Arrow';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Menu from './Components/Navigation/Menu';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Arrow />
        <Header />
        <Menu />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
