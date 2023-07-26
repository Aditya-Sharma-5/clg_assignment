import './App.css';
import Home from "./components/Home"
import NavBar from './components/NavBar';
import Header from './components/Header';
import NavBar2 from './components/NavBar2';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Home/>
      <NavBar2/>
    </div>
  );
}

export default App;
