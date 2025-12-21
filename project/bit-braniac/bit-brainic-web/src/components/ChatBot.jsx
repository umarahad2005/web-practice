import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaPaperPlane, FaRobot, FaUser, FaCode, FaLightbulb } from 'react-icons/fa';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Bit-Brainiac, your AI CS tutor. I can help you with Data Structures, Algorithms, Web Development, AI/ML, and more! What would you like to learn today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  const quickPrompts = [
    { icon: <FaCode />, text: "Explain Binary Search" },
    { icon: <FaLightbulb />, text: "What is React?" },
    { icon: <FaCode />, text: "How does recursion work?" },
    { icon: <FaLightbulb />, text: "Explain API REST" }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.chat-container', {
        scrollTrigger: {
          trigger: '.chat-section',
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, chatRef);

    return () => ctx.revert();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Great question! Let me explain that concept step by step...",
        "That's an important topic in computer science. Here's what you need to know...",
        "Excellent! I can help you understand this better. Let me break it down...",
        "Interesting question! This is a fundamental concept. Here's a detailed explanation..."
      ];

      const botMessage = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickPrompt = (promptText) => {
    handleSend(promptText);
  };

  return (
    <section className="chat-section" ref={chatRef}>
      <div className="chat-header-section">
        <h2 className="chat-main-title">
          Experience <span className="gradient-text">AI-Powered Learning</span>
        </h2>
        <p className="chat-main-description">
          Chat with Bit-Brainiac and get instant answers to your CS questions
        </p>
      </div>

      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-header-content">
            <FaRobot className="chat-header-icon" />
            <div>
              <h3 className="chat-header-title">Bit-Brainiac</h3>
              <p className="chat-header-status">
                <span className="status-dot"></span>
                Online
              </p>
            </div>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`message ${message.sender}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="message-avatar">
                {message.sender === 'bot' ? <FaRobot /> : <FaUser />}
              </div>
              <div className="message-content">
                <div className="message-text">{message.text}</div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot typing-indicator">
              <div className="message-avatar">
                <FaRobot />
              </div>
              <div className="message-content">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="quick-prompts">
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              className="quick-prompt-btn"
              onClick={() => handleQuickPrompt(prompt.text)}
            >
              {prompt.icon}
              <span>{prompt.text}</span>
            </button>
          ))}
        </div>

        <div className="chat-input-container">
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            placeholder="Ask me anything about Computer Science..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="send-button" 
            onClick={() => handleSend()}
            disabled={!inputValue.trim()}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;
