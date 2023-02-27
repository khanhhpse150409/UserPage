import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index';
import LoginPage from './pages/login';
import PrivateRoute from './components/dashboard/PrivateRoute';


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute/>}>
            <Route element={<Home/>} path="/dashboard" exact/>
        </Route>
        <Route path="/" element={<LoginPage />}/>
      </Routes>
    </Router> 
  );
}
export default App;
