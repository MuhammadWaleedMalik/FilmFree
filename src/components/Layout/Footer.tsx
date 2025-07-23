import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Film,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  Globe
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: t('footer.about'), path: '/about' },
        { name: t('footer.contact'), path: '/contact' },
        { name: 'Careers', path: '/careers' },
        { name: 'Press', path: '/press' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: t('footer.terms'), path: '/terms' },
        { name: t('footer.privacy'), path: '/privacy' },
        { name: t('footer.cookies'), path: '/cookies' },
        { name: 'GDPR', path: '/gdpr' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Community', path: '/community' },
        { name: 'Blog', path: '/blog' },
        { name: 'API', path: '/api' }
      ]
    }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand + Contact Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">FilmFreeway</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-md">
              The ultimate platform connecting filmmakers with festivals worldwide. 
              Submit your films, discover festivals, and grow your career in cinema.
            </p>

            {/* Contact Info */}
            <div className="mt-4 space-y-2 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92 344 4675899</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>pythoncoderexpert@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>pythonatewaleed@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.instagram.com/atlasnexuscorps_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@AtlasNexusCorps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Language Selector */}
          <div>
            <h3 className="text-white font-semibold mb-4">Language</h3>
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white"
              >
                <Globe className="h-5 w-5" />
                <span>
                  {languages.find((lang) => lang.code === language)?.flag}
                </span>
              </button>
              {isLanguageOpen && (
                <div className="absolute mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 flex items-center space-x-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2024 FilmFreeway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
