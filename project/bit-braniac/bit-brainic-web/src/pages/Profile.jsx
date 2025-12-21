import './Profile.css';

function Profile() {
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    joinDate: "January 2024",
    avatar: "👤",
    level: "Intermediate",
    points: 2450
  };

  const stats = [
    { label: "Courses Completed", value: "8", icon: "🎓" },
    { label: "Problems Solved", value: "142", icon: "✅" },
    { label: "Study Streak", value: "23 days", icon: "🔥" },
    { label: "Rank", value: "#1,234", icon: "🏆" }
  ];

  const recentActivity = [
    { title: "Completed Python Fundamentals", date: "2 days ago", type: "course" },
    { title: "Solved Two Sum Problem", date: "3 days ago", type: "practice" },
    { title: "Watched React Hooks Tutorial", date: "5 days ago", type: "tutorial" },
    { title: "Started Data Structures Course", date: "1 week ago", type: "course" }
  ];

  const enrolledCourses = [
    { id: 1, title: "Data Structures & Algorithms", progress: 45, icon: "🌳" },
    { id: 2, title: "Web Development with React", progress: 78, icon: "⚛️" },
    { id: 3, title: "Machine Learning Basics", progress: 12, icon: "🤖" }
  ];

  const achievements = [
    { title: "First Course Completed", icon: "🎯", earned: true },
    { title: "100 Problems Solved", icon: "💯", earned: true },
    { title: "7 Day Streak", icon: "⚡", earned: true },
    { title: "Top 5000 Rank", icon: "⭐", earned: true },
    { title: "Perfect Score", icon: "🎖️", earned: false },
    { title: "30 Day Streak", icon: "🔥", earned: false }
  ];

  return (
    <div className="profile-page">
      <section className="profile-hero">
        <div className="container">
          <div className="profile-header">
            <div className="avatar-section">
              <div className="avatar-large">{user.avatar}</div>
              <button className="edit-avatar">📷</button>
            </div>
            <div className="user-info">
              <h1 className="user-name">{user.name}</h1>
              <p className="user-email">{user.email}</p>
              <p className="user-meta">Member since {user.joinDate}</p>
              <span className="level-badge">{user.level}</span>
            </div>
            <div className="points-section">
              <div className="points-value">{user.points}</div>
              <div className="points-label">Total Points</div>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-content">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box">
                <span className="stat-icon">{stat.icon}</span>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="content-grid">
            <div className="main-column">
              <div className="section-card">
                <h2 className="section-heading">Enrolled Courses</h2>
                <div className="courses-list">
                  {enrolledCourses.map(course => (
                    <div key={course.id} className="course-item">
                      <span className="course-icon">{course.icon}</span>
                      <div className="course-info">
                        <h3 className="course-name">{course.title}</h3>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="progress-text">{course.progress}% Complete</span>
                      </div>
                      <button className="continue-btn">Continue</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-card">
                <h2 className="section-heading">Achievements</h2>
                <div className="achievements-grid">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`achievement-badge ${achievement.earned ? 'earned' : 'locked'}`}
                    >
                      <span className="achievement-icon">{achievement.icon}</span>
                      <p className="achievement-title">{achievement.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sidebar-column">
              <div className="section-card">
                <h2 className="section-heading">Recent Activity</h2>
                <div className="activity-list">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className={`activity-dot ${activity.type}`}></div>
                      <div className="activity-content">
                        <p className="activity-title">{activity.title}</p>
                        <p className="activity-date">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-card">
                <h2 className="section-heading">Settings</h2>
                <div className="settings-menu">
                  <button className="settings-item">
                    <span>⚙️</span>
                    Account Settings
                  </button>
                  <button className="settings-item">
                    <span>🔔</span>
                    Notifications
                  </button>
                  <button className="settings-item">
                    <span>🔒</span>
                    Privacy
                  </button>
                  <button className="settings-item">
                    <span>📊</span>
                    Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
