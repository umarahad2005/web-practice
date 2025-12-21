import { useEffect, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Ex-Google engineer with a passion for education',
      avatar: '👩‍💻',
      color: 'bg-purple-500',
    },
    {
      name: 'Alex Kumar',
      role: 'CTO',
      bio: 'AI researcher from Stanford, loves building cool stuff',
      avatar: '👨‍🔬',
      color: 'bg-cyan-500',
    },
    {
      name: 'Maya Johnson',
      role: 'Head of Education',
      bio: 'Former CS professor who makes learning fun',
      avatar: '👩‍🏫',
      color: 'bg-orange-500',
    },
    {
      name: 'Jordan Lee',
      role: 'Lead Developer',
      bio: 'Full-stack wizard, coffee enthusiast',
      avatar: '🧙‍♂️',
      color: 'bg-green-500',
    },
  ];

  const values = [
    {
      icon: '❤️',
      title: 'Learning with Love',
      description: 'We believe education should be fun, not painful.',
    },
    {
      icon: '🌟',
      title: 'Always Accessible',
      description: 'Quality education shouldn\'t cost a fortune.',
    },
    {
      icon: '⚡',
      title: 'Powered by Innovation',
      description: 'Cutting-edge AI for personalized learning.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px]"></div>

        <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="text-xl">✨</span>
            <span className="text-sm text-gray-300">Our Story</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white block">We're Building the</span>
            <span className="gradient-text block mt-2">Future of Learning</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Started in a dorm room by CS students who were tired of confusing textbooks 
            and boring lectures. We knew there had to be a better way. So we built it. 🚀
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#0d0d14] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We're on a mission to make computer science education accessible to everyone. 
                No gatekeeping, no judgment – just pure learning vibes.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you're a total beginner or a senior dev looking to level up, 
                BitBrainiac is here to support your journey.
              </p>
            </div>
            <div className="relative">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-2">1 Million Learners</h3>
                <p className="text-gray-400">Our goal by 2026. Will you be one of them?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">What We </span>
              <span className="gradient-text">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0d0d14] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Meet the </span>
              <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-400">The humans behind the AI magic ✨</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-16 h-16 mx-auto ${member.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
