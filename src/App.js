import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import EmployeeLogin from './components/EmployeeLogin';
import EmployerLogin from './components/EmployerLogin';
import EmployerSignup from './components/EmployerSignup';
function App() {
  return (
    <>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
            <Route exact path="/EmployerSignup" element={<EmployerSignup/>}></Route>
              <Route exact path="/EmployeeLogin" element={<EmployeeLogin/>}></Route>
              <Route exact path="/EmployerLogin" element={<EmployerLogin/>}></Route>             
              <Route exact path="/signup" element={<Signup/>}></Route>
            </Routes>
          </div>
          
        </Router>
    </>
  );
}

export default App;
