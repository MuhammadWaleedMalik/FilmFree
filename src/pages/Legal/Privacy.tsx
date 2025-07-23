import React from 'react';
import { motion } from 'framer-motion';

const Privacy: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, submit films, or contact us for support. This may include your name, email address, payment information, and film details.'
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and events.'
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with festival organizers when you submit to their festivals.'
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. Contact us to exercise these rights.'
    },
    {
      title: 'Cookies',
      content: 'We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.'
    },
    {
      title: 'Third-Party Services',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.'
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date.'
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-8">
                At FilmFreeway, we are committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, and safeguard your information when you use our website and services.
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
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Us</h3>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="mt-4 text-gray-300 space-y-2">
                  <li>Email: privacy@filmfreeway.com</li>
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

export default Privacy;