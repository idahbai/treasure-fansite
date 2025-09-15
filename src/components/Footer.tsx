import React from 'react';
import { Heart, Instagram, Twitter, Youtube, Music } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Music, label: 'Spotify', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              TREASURE
            </h3>
            <p className="text-gray-400 mb-4">
              Website fan unofficial untuk mempromosikan boy grup TREASURE dari YG Entertainment. 
              Dibuat dengan cinta oleh TEUME untuk TEUME di seluruh dunia.
            </p>
            <div className="flex items-center gap-2 text-pink-400">
              <Heart size={16} />
              <span className="text-sm">Made with love for TEUME</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Beranda', 'Tentang', 'Member', 'Diskografi', 'Galeri'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Ikuti TREASURE</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Jangan lupa follow media sosial resmi TREASURE untuk update terbaru!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 TREASURE Fan Website. Semua hak cipta dilindungi.
            </p>
            <p className="text-gray-400 text-sm">
              Dibuat untuk tujuan edukasi dan promosi. Tidak berafiliasi dengan YG Entertainment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;