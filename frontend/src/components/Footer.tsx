import React, { useState } from 'react';
import { Heart, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_f9ap66i',        // Your Service ID
      'template_hq0n6o5',       // Your Template ID
      {
        user_name: name,         // matches {{user_name}}
        user_email: email,       // matches {{user_email}}
        message: message         // matches {{message}}
      },
      'cqkI17x8yi7e7uUHP'       // Your Public Key
    )
    .then(() => {
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setIsOpen(false);
    })
    .catch((err) => {
      console.error(err);
      alert('Failed to send message, try again.');
    });
  };

  return (
    <footer className="py-10 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Section */}
          <div className="text-gray-400 flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© 2025 Ganesh Joshi.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="text-red-400 animate-pulse" size={16} />
            </span>
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300"><Github size={18} /></a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300"><Linkedin size={18} /></a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300"><Twitter size={18} /></a>
            </div>

            <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium">Back to Top ↑</a>

            <button onClick={() => setIsOpen(true)} className="text-gray-400 hover:text-green-400 transition-colors duration-300 font-medium">
              Send Message 📩
            </button>
          </div>
        </div>

        {/* Message Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-6 rounded-xl max-w-md w-full">
              <h3 className="text-white text-xl font-bold mb-4">Send me a message</h3>
              <form onSubmit={sendEmail} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 rounded bg-gray-800 text-white border border-gray-700"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 rounded bg-gray-800 text-white border border-gray-700"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="p-2 rounded bg-gray-800 text-white border border-gray-700"
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <p className="text-gray-500 text-xs mt-6 text-center md:text-left">
          Designed & Developed by Ganesh Joshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
