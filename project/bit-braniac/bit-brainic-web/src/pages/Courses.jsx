import { Link } from 'react-router-dom';
import './Courses.css';

function Courses() {
  const courses = [
    {
      id: 1,
      title: "Python Fundamentals",
      level: "Beginner",
      duration: "6 weeks",
      lessons: 42,
      description: "Master Python basics including variables, loops, functions, and OOP",
      icon: "🐍"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      level: "Intermediate",
      duration: "10 weeks",
      lessons: 68,
      description: "Deep dive into arrays, linked lists, trees, graphs, sorting, and searching",
      icon: "🌳"
    },
    {
      id: 3,
      title: "Web Development with React",
      level: "Intermediate",
      duration: "8 weeks",
      lessons: 55,
      description: "Build modern web apps with React, hooks, and state management",
      icon: "⚛️"
    },
    {
      id: 4,
      title: "Database Design & SQL",
      level: "Beginner",
      duration: "5 weeks",
      lessons: 35,
      description: "Learn relational databases, SQL queries, and database optimization",
      icon: "🗄️"
    },
    {
      id: 5,
      title: "Machine Learning Basics",
      level: "Advanced",
      duration: "12 weeks",
      lessons: 82,
      description: "Introduction to ML algorithms, neural networks, and AI concepts",
      icon: "🤖"
    },
    {
      id: 6,
      title: "System Design",
      level: "Advanced",
      duration: "8 weeks",
      lessons: 48,
      description: "Design scalable systems, microservices, and distributed architectures",
      icon: "🏗️"
    },
    {
      id: 7,
      title: "JavaScript Mastery",
      level: "Beginner",
      duration: "7 weeks",
      lessons: 50,
      description: "Complete JavaScript from basics to advanced concepts like async/await",
      icon: "📜"
    },
    {
      id: 8,
      title: "Mobile App Development",
      level: "Intermediate",
      duration: "9 weeks",
      lessons: 62,
      description: "Build cross-platform mobile apps with React Native",
      icon: "📱"
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'level-beginner';
      case 'Intermediate': return 'level-intermediate';
      case 'Advanced': return 'level-advanced';
      default: return '';
    }
  };

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="container">
          <h1 className="page-title">Explore Our Courses</h1>
          <p className="page-subtitle">
            Comprehensive learning paths designed to take you from beginner to expert
          </p>
          <div className="filter-bar">
            <button className="filter-btn active">All Courses</button>
            <button className="filter-btn">Beginner</button>
            <button className="filter-btn">Intermediate</button>
            <button className="filter-btn">Advanced</button>
          </div>
        </div>
      </section>

      <section className="courses-list">
        <div className="container">
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-icon">{course.icon}</div>
                <div className="course-header">
                  <span className={`level-badge ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <h3 className="course-title">{course.title}</h3>
                </div>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <span className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    {course.duration}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">📚</span>
                    {course.lessons} lessons
                  </span>
                </div>
                <Link to={`/courses/${course.id}`} className="course-btn">
                  Start Learning
                  <span className="arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-path-section">
        <div className="container">
          <h2 className="section-title">Recommended Learning Paths</h2>
          <div className="paths-grid">
            <div className="path-card">
              <h3>🎯 Full-Stack Developer</h3>
              <p>Python → Web Development → Database Design → System Design</p>
              <span className="path-duration">32 weeks</span>
            </div>
            <div className="path-card">
              <h3>💼 Software Engineer</h3>
              <p>JavaScript → Data Structures → System Design</p>
              <span className="path-duration">25 weeks</span>
            </div>
            <div className="path-card">
              <h3>🤖 AI/ML Engineer</h3>
              <p>Python → Data Structures → Machine Learning</p>
              <span className="path-duration">28 weeks</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
