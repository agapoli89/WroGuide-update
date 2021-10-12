import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Arrow from './components/Arrow/Arrow';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menu from './components/Navigation/Menu';

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
