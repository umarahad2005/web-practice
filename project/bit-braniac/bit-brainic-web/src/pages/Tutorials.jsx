import './Tutorials.css';

function Tutorials() {
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with Python",
      category: "Python",
      duration: "15 min",
      difficulty: "Beginner",
      views: "12.5K",
      thumbnail: "🐍"
    },
    {
      id: 2,
      title: "Understanding Big O Notation",
      category: "Algorithms",
      duration: "20 min",
      difficulty: "Intermediate",
      views: "8.3K",
      thumbnail: "📊"
    },
    {
      id: 3,
      title: "React Hooks Deep Dive",
      category: "Web Dev",
      duration: "25 min",
      difficulty: "Intermediate",
      views: "15.2K",
      thumbnail: "⚛️"
    },
    {
      id: 4,
      title: "Binary Search Trees Explained",
      category: "Data Structures",
      duration: "30 min",
      difficulty: "Advanced",
      views: "6.7K",
      thumbnail: "🌲"
    },
    {
      id: 5,
      title: "SQL Joins Masterclass",
      category: "Database",
      duration: "18 min",
      difficulty: "Beginner",
      views: "9.8K",
      thumbnail: "🗃️"
    },
    {
      id: 6,
      title: "Building REST APIs",
      category: "Backend",
      duration: "35 min",
      difficulty: "Intermediate",
      views: "11.4K",
      thumbnail: "🔌"
    },
    {
      id: 7,
      title: "Dynamic Programming Patterns",
      category: "Algorithms",
      duration: "40 min",
      difficulty: "Advanced",
      views: "5.2K",
      thumbnail: "🧩"
    },
    {
      id: 8,
      title: "CSS Grid Layout Guide",
      category: "Web Dev",
      duration: "22 min",
      difficulty: "Beginner",
      views: "13.6K",
      thumbnail: "🎨"
    },
    {
      id: 9,
      title: "Docker for Beginners",
      category: "DevOps",
      duration: "28 min",
      difficulty: "Beginner",
      views: "10.9K",
      thumbnail: "🐳"
    }
  ];

  const categories = [
    { name: "All", icon: "📚" },
    { name: "Python", icon: "🐍" },
    { name: "Web Dev", icon: "🌐" },
    { name: "Algorithms", icon: "⚡" },
    { name: "Data Structures", icon: "🌳" },
    { name: "Database", icon: "🗄️" }
  ];

  return (
    <div className="tutorials-page">
      <section className="tutorials-hero">
        <div className="container">
          <h1 className="page-title">Video Tutorials</h1>
          <p className="page-subtitle">
            Learn through step-by-step video guides created by expert instructors
          </p>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search tutorials..."
              className="search-input"
            />
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="categories-scroll">
            {categories.map((cat, index) => (
              <button key={index} className={`category-chip ${index === 0 ? 'active' : ''}`}>
                <span className="chip-icon">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="tutorials-list">
        <div className="container">
          <div className="list-header">
            <h2 className="section-title">Popular Tutorials</h2>
            <select className="sort-select">
              <option>Most Popular</option>
              <option>Most Recent</option>
              <option>Shortest First</option>
              <option>Longest First</option>
            </select>
          </div>
          
          <div className="tutorials-grid">
            {tutorials.map(tutorial => (
              <div key={tutorial.id} className="tutorial-card">
                <div className="tutorial-thumbnail">
                  <div className="thumbnail-icon">{tutorial.thumbnail}</div>
                  <span className="duration-badge">{tutorial.duration}</span>
                </div>
                <div className="tutorial-content">
                  <div className="tutorial-tags">
                    <span className="category-tag">{tutorial.category}</span>
                    <span className={`difficulty-tag difficulty-${tutorial.difficulty.toLowerCase()}`}>
                      {tutorial.difficulty}
                    </span>
                  </div>
                  <h3 className="tutorial-title">{tutorial.title}</h3>
                  <div className="tutorial-footer">
                    <span className="views">
                      <span className="footer-icon">👁️</span>
                      {tutorial.views} views
                    </span>
                    <button className="play-btn">
                      <span className="play-icon">▶️</span>
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Want to Create Your Own Tutorials?</h2>
            <p>Join our community of educators and share your knowledge</p>
            <button className="cta-button">Become an Instructor</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tutorials;
