import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Film, Award, Users, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Film,
      title: t('features.submit.title'),
      description: t('features.submit.desc'),
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Award,
      title: t('features.discover.title'),
      description: t('features.discover.desc'),
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: t('features.track.title'),
      description: t('features.track.desc'),
      color: 'from-pink-500 to-red-600'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Films Submitted' },
    { number: '2K+', label: 'Festivals' },
    { number: '100+', label: 'Countries' },
    { number: '95%', label: 'Success Rate' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Independent Filmmaker',
      content: 'FilmFreeway made it incredibly easy to submit my documentary to festivals worldwide. The platform is intuitive and the support is amazing.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Festival Director',
      content: 'As a festival organizer, FilmFreeway has streamlined our entire submission process. We can focus on what matters most - discovering great films.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Short Film Director',
      content: 'I won three awards through festivals I found on FilmFreeway. This platform has been instrumental in launching my career.',
      rating: 5
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t('hero.cta')}
              </Link>
              <Link
                to="/explore"
                className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>{t('hero.explore')}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our platform provides all the tools and connections you need to showcase your work and grow your career in film.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <Link
                  to="/explore"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of filmmakers and festivals who trust FilmFreeway to connect and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Share Your Story?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the global community of filmmakers and festivals. Start your journey today.
            </p>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Free
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;