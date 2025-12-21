import { useState } from 'react';
import './Practice.css';

function Practice() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const challenges = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Arrays",
      acceptance: "47%",
      submissions: "2.5M",
      description: "Find two numbers in an array that add up to a target value"
    },
    {
      id: 2,
      title: "Reverse Linked List",
      difficulty: "Easy",
      category: "Linked List",
      acceptance: "64%",
      submissions: "1.8M",
      description: "Reverse a singly linked list iteratively or recursively"
    },
    {
      id: 3,
      title: "Binary Tree Level Order Traversal",
      difficulty: "Medium",
      category: "Trees",
      acceptance: "56%",
      submissions: "1.2M",
      description: "Return the level order traversal of a binary tree"
    },
    {
      id: 4,
      title: "Longest Substring Without Repeating",
      difficulty: "Medium",
      category: "Strings",
      acceptance: "31%",
      submissions: "3.1M",
      description: "Find the length of longest substring without repeating characters"
    },
    {
      id: 5,
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      category: "Heap",
      acceptance: "42%",
      submissions: "850K",
      description: "Merge k sorted linked lists into one sorted list"
    },
    {
      id: 6,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stack",
      acceptance: "38%",
      submissions: "2.2M",
      description: "Check if string of brackets is properly balanced"
    },
    {
      id: 7,
      title: "Coin Change",
      difficulty: "Medium",
      category: "Dynamic Programming",
      acceptance: "37%",
      submissions: "1.5M",
      description: "Minimum number of coins needed to make up a given amount"
    },
    {
      id: 8,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      category: "Binary Search",
      acceptance: "30%",
      submissions: "980K",
      description: "Find the median of two sorted arrays in logarithmic time"
    },
    {
      id: 9,
      title: "Maximum Subarray",
      difficulty: "Easy",
      category: "Arrays",
      acceptance: "46%",
      submissions: "1.9M",
      description: "Find the contiguous subarray with the largest sum"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'diff-easy';
      case 'Medium': return 'diff-medium';
      case 'Hard': return 'diff-hard';
      default: return '';
    }
  };

  const filteredChallenges = selectedDifficulty === 'All' 
    ? challenges 
    : challenges.filter(c => c.difficulty === selectedDifficulty);

  return (
    <div className="practice-page">
      <section className="practice-hero">
        <div className="container">
          <h1 className="page-title">Practice Challenges</h1>
          <p className="page-subtitle">
            Master algorithms and data structures through hands-on coding challenges
          </p>
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-value">200+</span>
              <span className="stat-label">Problems</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">50K+</span>
              <span className="stat-label">Solutions</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">15+</span>
              <span className="stat-label">Topics</span>
            </div>
          </div>
        </div>
      </section>

      <section className="challenges-section">
        <div className="container">
          <div className="challenges-header">
            <div className="filter-group">
              <button 
                className={`filter-tag ${selectedDifficulty === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('All')}
              >
                All
              </button>
              <button 
                className={`filter-tag ${selectedDifficulty === 'Easy' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('Easy')}
              >
                Easy
              </button>
              <button 
                className={`filter-tag ${selectedDifficulty === 'Medium' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('Medium')}
              >
                Medium
              </button>
              <button 
                className={`filter-tag ${selectedDifficulty === 'Hard' ? 'active' : ''}`}
                onClick={() => setSelectedDifficulty('Hard')}
              >
                Hard
              </button>
            </div>
          </div>

          <div className="challenges-table">
            <div className="table-header">
              <div className="col-status">Status</div>
              <div className="col-title">Problem</div>
              <div className="col-difficulty">Difficulty</div>
              <div className="col-acceptance">Acceptance</div>
              <div className="col-action"></div>
            </div>
            
            {filteredChallenges.map(challenge => (
              <div key={challenge.id} className="table-row">
                <div className="col-status">
                  <span className="status-icon">○</span>
                </div>
                <div className="col-title">
                  <h3 className="challenge-title">{challenge.title}</h3>
                  <p className="challenge-desc">{challenge.description}</p>
                  <div className="challenge-tags">
                    <span className="tag">{challenge.category}</span>
                  </div>
                </div>
                <div className="col-difficulty">
                  <span className={`difficulty-badge ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                </div>
                <div className="col-acceptance">
                  <span className="acceptance-rate">{challenge.acceptance}</span>
                  <span className="submissions">{challenge.submissions}</span>
                </div>
                <div className="col-action">
                  <button className="solve-btn">Solve</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="practice-features">
        <div className="container">
          <h2 className="section-title">Why Practice With Us?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">💻</span>
              <h3>Real-time Code Editor</h3>
              <p>Write and test your code directly in the browser</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🤖</span>
              <h3>AI Hints</h3>
              <p>Get intelligent hints when you're stuck</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <h3>Instant Validation</h3>
              <p>Run test cases and verify your solution</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📈</span>
              <h3>Progress Tracking</h3>
              <p>Monitor your improvement over time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Practice;
