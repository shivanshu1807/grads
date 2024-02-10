import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import EmployeeLogin from './components/EmployeeLogin';
import EmployerLogin from './components/EmployerLogin';
import EmployerSignup from './components/EmployerSignup';
import EmployerDetails from './components/EmployerDetails';
import EmployeeDetails from './components/EmployeeDetails';
import Home from './components/Home';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/EmployerSignup" element={<EmployerSignup />} />
            <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
            <Route path="/EmployerLogin" element={<EmployerLogin />} />
            <Route path="/getemployerdetails" element={<EmployerDetails />} />
            <Route path="/getemployeedetails" element={<EmployeeDetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

