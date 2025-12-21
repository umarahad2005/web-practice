import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaBrain, FaRocket, FaCode } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.2
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5
      });

      // CTA button animation
      gsap.from(ctaRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 1
      });

      // Icons animation
      iconsRef.current.forEach((icon, index) => {
        gsap.from(icon, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power4.out',
          delay: 1.2 + index * 0.15
        });
      });

      // Floating animation for icons
      iconsRef.current.forEach((icon, index) => {
        gsap.to(icon, {
          y: -20,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.5 + index * 0.15
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-brain-icon">
          <FaBrain className="brain-icon" />
        </div>
        
        <h1 className="hero-title" ref={titleRef}>
          <span className="gradient-text">Bit-Brainiac</span>
        </h1>
        
        <p className="hero-subtitle" ref={subtitleRef}>
          Your AI-Powered Computer Science Tutor
          <br />
          <span className="subtitle-small">Master Every Domain with Intelligent Guidance</span>
        </p>
        
        <button className="cta-button" ref={ctaRef}>
          Start Learning Now
          <FaRocket className="cta-icon" />
        </button>
        
        <div className="hero-features">
          <div 
            className="feature-pill" 
            ref={el => iconsRef.current[0] = el}
          >
            <FaCode />
            <span>DSA & Algorithms</span>
          </div>
          <div 
            className="feature-pill" 
            ref={el => iconsRef.current[1] = el}
          >
            <FaCode />
            <span>Web Development</span>
          </div>
          <div 
            className="feature-pill" 
            ref={el => iconsRef.current[2] = el}
          >
            <FaCode />
            <span>AI & ML</span>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="grid-background"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;
