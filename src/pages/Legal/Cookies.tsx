import React from 'react';
import { motion } from 'framer-motion';

const Cookies: React.FC = () => {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: ['Authentication', 'Security', 'Form submission']
    },
    {
      title: 'Performance Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      examples: ['Google Analytics', 'Page load times', 'Error tracking']
    },
    {
      title: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      examples: ['Language preferences', 'Login status', 'User preferences']
    },
    {
      title: 'Targeting Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      examples: ['Social media integration', 'Marketing campaigns', 'Personalized content']
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
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: January 1, 2024
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-8">
                This Cookie Policy explains how FilmFreeway uses cookies and similar technologies 
                to recognize you when you visit our website. It explains what these technologies 
                are and why we use them, as well as your rights to control our use of them.
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">What are cookies?</h2>
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small data files that are placed on your computer or mobile device 
                  when you visit a website. Cookies are widely used by website owners to make 
                  their websites work, or to work more efficiently, as well as to provide 
                  reporting information.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Why do we use cookies?</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies for several reasons. Some cookies are required for technical 
                  reasons in order for our website to operate, and we refer to these as 
                  "essential" or "strictly necessary" cookies. Other cookies enable us to 
                  track and target the interests of our users to enhance the experience on our website.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Types of cookies we use</h2>
                {cookieTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-700/50 rounded-xl p-6 border border-gray-600"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="text-sm text-gray-400">
                      <span className="font-medium">Examples: </span>
                      {type.examples.join(', ')}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">How can you control cookies?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have the right to decide whether to accept or reject cookies. You can 
                  exercise your cookie preferences by clicking on the appropriate opt-out links 
                  provided in the cookie banner when you visit our website.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  You can also set or amend your web browser controls to accept or refuse cookies. 
                  If you choose to reject cookies, you may still use our website though your 
                  access to some functionality and areas of our website may be restricted.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Updates to this Cookie Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Cookie Policy from time to time in order to reflect changes 
                  to the cookies we use or for other operational, legal or regulatory reasons. 
                  Please therefore re-visit this Cookie Policy regularly to stay informed about 
                  our use of cookies and related technologies.
                </p>
              </div>

              <div className="p-6 bg-gray-700/50 rounded-xl border border-gray-600">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Us</h3>
                <p className="text-gray-300">
                  If you have any questions about our use of cookies, please contact us at:
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

export default Cookies;