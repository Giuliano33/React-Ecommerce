import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Menu from "./Components/Menu/index"
import RegistroPage from "./Pages/RegistroPage"
import DetallePage from "./Pages/DetallePage"
import LoginPage from "./Pages/LoginPage"
import firebase from "firebase"
function App() {
  
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/" component={HomePage} exact />
      <Route path="/alta" component={RegistroPage} exact />
      <Route path="/ingreso" component={LoginPage} exact />
      <Route path="/producto/:id" component={DetallePage} exact />
    
    </BrowserRouter>
  );
}

export default App;
