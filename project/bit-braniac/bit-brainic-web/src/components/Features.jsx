import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaCode, FaDatabase, FaBrain, FaNetworkWired, 
  FaMobile, FaShieldAlt, FaRobot, FaChartLine 
} from 'react-icons/fa';
import './Features.css';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featuresRef = useRef(null);
  const cardsRef = useRef([]);

  const features = [
    {
      icon: <FaCode />,
      title: 'Data Structures & Algorithms',
      description: 'Master arrays, linked lists, trees, graphs, sorting, and searching algorithms with interactive examples.',
      color: '#6366f1'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Web Development',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js, and build full-stack applications from scratch.',
      color: '#8b5cf6'
    },
    {
      icon: <FaBrain />,
      title: 'Artificial Intelligence',
      description: 'Explore machine learning, deep learning, neural networks, and AI model development.',
      color: '#ec4899'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Systems',
      description: 'Understand SQL, NoSQL, database design, normalization, and query optimization techniques.',
      color: '#14b8a6'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Development',
      description: 'Create native and cross-platform mobile apps with React Native, Flutter, and modern frameworks.',
      color: '#f59e0b'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Learn encryption, network security, ethical hacking, and secure coding practices.',
      color: '#ef4444'
    },
    {
      icon: <FaRobot />,
      title: 'Machine Learning',
      description: 'Build predictive models, work with scikit-learn, TensorFlow, and implement ML algorithms.',
      color: '#06b6d4'
    },
    {
      icon: <FaChartLine />,
      title: 'Data Science',
      description: 'Analyze data, create visualizations, and extract insights using Python, Pandas, and NumPy.',
      color: '#10b981'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out'
        });
      });
    }, featuresRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="features" ref={featuresRef}>
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Master Computer Science
            <span className="gradient-text"> Across All Domains</span>
          </h2>
          <p className="features-description">
            Bit-Brainiac provides comprehensive tutoring in every area of computer science,
            from fundamentals to advanced topics. Learn at your own pace with AI-powered guidance.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              ref={el => cardsRef.current[index] = el}
              style={{ '--card-color': feature.color }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
