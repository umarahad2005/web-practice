import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Tutorials from './pages/Tutorials';
import Practice from './pages/Practice';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <ChatBot />
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 Bit-Brainiac. Your AI-Powered Computer Science Tutor.</p>
            <p className="footer-tagline">Built with React, React Router, and ❤️ for learners worldwide</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
