import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Master Computer Science?</h2>
          <p className="cta-description">
            Join thousands of students learning programming, algorithms, and computer science concepts with AI-powered guidance.
          </p>
          <div className="cta-buttons">
            <Link to="/courses" className="btn btn-primary">
              Explore Courses
            </Link>
            <Link to="/practice" className="btn btn-secondary">
              Start Practicing
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">50K+</h3>
              <p className="stat-label">Active Learners</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">200+</h3>
              <p className="stat-label">Programming Challenges</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Course Tracks</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">AI Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
