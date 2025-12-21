import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI-Powered Learning',
      description: 'Get personalized explanations and instant answers to your CS questions 24/7.',
      color: 'bg-purple-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Code Practice',
      description: 'Master algorithms with hands-on coding challenges and real-time feedback.',
      color: 'bg-pink-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Instant Feedback',
      description: 'Learn faster with immediate corrections and helpful suggestions.',
      color: 'bg-cyan-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Track Progress',
      description: 'Visualize your learning journey with detailed analytics and insights.',
      color: 'bg-orange-500',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '1M+', label: 'Questions Answered' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'AI Support' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-pink-600/15 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-bounce" style={{animationDuration: '3s'}}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-gray-300">AI-Powered • Available 24/7</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white block">Learn CS with</span>
            <span className="gradient-text block mt-2">Your AI Bestie</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Master computer science concepts with an AI tutor that actually gets you. 
            No boring lectures, just vibes and real learning. ✨
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/chat" className="btn-primary text-lg">
              Start Chatting
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/about" className="btn-secondary text-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0d0d14] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-default"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Why </span>
              <span className="gradient-text">BitBrainiac?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              We're not your average boring tutor. Here's what makes us different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]"></div>
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ready to </span>
            <span className="gradient-text">Level Up?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of students who are already crushing their CS goals. 
            Your journey starts with one chat. 💫
          </p>
          <Link to="/chat" className="btn-primary text-lg">
            Get Started Free
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
