import { useState, useEffect } from 'react';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Message sent successfully! We\'ll get back to you soon. ✨');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      value: 'umarahadusmani@gmail.com',
      link: 'mailto:umarahadusmani@gmail.com',
      color: 'bg-purple-500',
    },
    {
      icon: '📞',
      title: 'Call Us',
      value: '+92 333 4739757',
      link: 'tel:+923334739757',
      color: 'bg-pink-500',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Riphah International University, Lahore',
      link: '#',
      color: 'bg-cyan-500',
    },
  ];

  const faqs = [
    {
      question: 'How does the AI tutor work?',
      answer: 'Our AI uses advanced language models to understand your questions and provide personalized explanations.',
    },
    {
      question: 'Is BitBrainiac free to use?',
      answer: 'Yes! Basic features are completely free. We also offer premium plans for advanced features.',
    },
    {
      question: 'What topics does it cover?',
      answer: 'We cover everything from basic programming to advanced CS topics like algorithms and data structures.',
    },
    {
      question: 'Can I use it for homework help?',
      answer: 'Absolutely! Our AI can help explain concepts and guide you through problems.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px]"></div>

        <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="text-xl">💬</span>
            <span className="text-sm text-gray-300">We'd love to hear from you</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Got questions, feedback, or just want to say hi? 
            We're here for you. Drop us a message! 👋
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{info.title}</h3>
                  <p className="text-gray-400 text-sm">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-white">Send us a </span>
                <span className="gradient-text">Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-all"
                  >
                    <option value="" className="bg-[#12121a]">Select a topic</option>
                    <option value="general" className="bg-[#12121a]">General Inquiry</option>
                    <option value="support" className="bg-[#12121a]">Technical Support</option>
                    <option value="feedback" className="bg-[#12121a]">Feedback</option>
                    <option value="other" className="bg-[#12121a]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-white">Frequently </span>
                <span className="gradient-text">Asked</span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
