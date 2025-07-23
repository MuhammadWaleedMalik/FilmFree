import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using FilmFreeway, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on FilmFreeway for personal, non-commercial transitory viewing only.'
    },
    {
      title: 'Disclaimer',
      content: 'The materials on FilmFreeway are provided on an \'as is\' basis. FilmFreeway makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      title: 'Limitations',
      content: 'In no event shall FilmFreeway or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FilmFreeway, even if FilmFreeway or a FilmFreeway authorized representative has been notified orally or in writing of the possibility of such damage.'
    },
    {
      title: 'Accuracy of Materials',
      content: 'The materials appearing on FilmFreeway could include technical, typographical, or photographic errors. FilmFreeway does not warrant that any of the materials on its website are accurate, complete, or current.'
    },
    {
      title: 'Links',
      content: 'FilmFreeway has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site.'
    },
    {
      title: 'Modifications',
      content: 'FilmFreeway may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      title: 'Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-8">
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using 
                the FilmFreeway website (the "Service") operated by FilmFreeway Inc. ("us", "we", or "our").
              </p>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-700/50 rounded-xl border border-gray-600">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Information</h3>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <ul className="mt-4 text-gray-300 space-y-2">
                  <li>Email: legal@filmfreeway.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Film Street, Los Angeles, CA 90028</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;