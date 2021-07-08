import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
