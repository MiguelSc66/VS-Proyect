import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import LoginForm from './components/Login/Login';
import RegistrationForm from './components/Register/Register';
import NavBar from './components/NavBar/NavBar';
import Error from './components/Error/Error';
import { useSelector } from 'react-redux';

function App() {
  const admins = useSelector(state => state.isAdmin);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="*" element={<Error />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
