import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import Destinations from './pages/Destinations';
import PlanYourTrip from './pages/PlanYourTrip';
import Events from './pages/Events';
import Stopover from './pages/Stopover';
import ThingsToDo from './pages/ThingsToDo';
import InvestInEthiopia from './pages/InvestInEthiopia';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import './styles/variables.css';


const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.role !== 'admin') return <Navigate to="/" />;

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/plan-trip" element={<PlanYourTrip />} />
          <Route path="/events" element={<Events />} />
          <Route path="/stopover" element={<Stopover />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/invest" element={<InvestInEthiopia />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ChatWidget />
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
