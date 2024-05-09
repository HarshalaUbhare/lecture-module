import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import NavBar from './Component/NavBar.jsx';
import Admin from './Component/Admin.jsx'
import SignUp from './Component/SignUp.js'
import Login from './Component/Login.js'
import Instructor from "./Component/Instructor.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/" element={<Admin />} />
          <Route path="/instructure" element={<Instructor/>} />

          {/* Define more routes as needed */}
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
