import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🧠</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Bit</span>
                <span className="gradient-text">Brainiac</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your AI-powered companion for mastering computer science. Built by students, for students.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:umarahadusmani@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                📧 umarahadusmani@gmail.com
              </a>
              <a href="tel:+923334739757" className="text-gray-400 hover:text-purple-400 transition-colors">
                📞 +92 333 4739757
              </a>
              <p className="text-gray-400">
                📍 Riphah International University, Lahore
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} BitBrainiac. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with ❤️ by Umar & Hassan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;