import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Bit-Brainiac</h1>
          <p className="page-subtitle">
            Empowering the next generation of developers with AI-powered learning
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-block">
              <div className="icon-wrapper">
                <span className="icon">🎯</span>
              </div>
              <h2>Our Mission</h2>
              <p>
                To democratize computer science education by providing accessible, 
                AI-powered learning experiences that adapt to each student's unique 
                learning style and pace.
              </p>
            </div>
            <div className="content-block">
              <div className="icon-wrapper">
                <span className="icon">👁️</span>
              </div>
              <h2>Our Vision</h2>
              <p>
                A world where anyone, anywhere can master computer science concepts 
                through personalized, interactive learning powered by cutting-edge AI technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="story-content">
            <p>
              Bit-Brainiac was founded in 2024 by a team of passionate educators and 
              engineers who recognized the challenges students face when learning computer 
              science. Traditional learning methods often fail to provide the personalized 
              support each student needs.
            </p>
            <p>
              We combined our expertise in artificial intelligence, education, and software 
              development to create an intelligent tutoring platform that adapts to each 
              learner's needs, providing instant feedback and guidance 24/7.
            </p>
            <p>
              Today, Bit-Brainiac serves thousands of students worldwide, helping them master 
              everything from basic programming to advanced algorithms and data structures.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">💡</span>
              <h3>Innovation</h3>
              <p>Constantly pushing the boundaries of educational technology</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h3>Accessibility</h3>
              <p>Making quality education available to everyone, everywhere</p>
            </div>
            <div className="value-card">
              <span className="value-icon">⚡</span>
              <h3>Excellence</h3>
              <p>Delivering the highest quality learning experiences</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🌱</span>
              <h3>Growth</h3>
              <p>Supporting continuous learning and personal development</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Alex Johnson</h3>
              <p className="member-role">Co-Founder & CEO</p>
              <p className="member-bio">Former Google engineer passionate about education</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🏫</div>
              <h3>Sarah Chen</h3>
              <p className="member-role">Head of Education</p>
              <p className="member-bio">PhD in Computer Science Education</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔬</div>
              <h3>Michael Lee</h3>
              <p className="member-role">AI Research Lead</p>
              <p className="member-bio">Specialized in adaptive learning systems</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Emily Rodriguez</h3>
              <p className="member-role">Product Manager</p>
              <p className="member-bio">10+ years in EdTech product development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
