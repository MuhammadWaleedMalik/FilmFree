import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Submit to 3 festivals per month',
        'Basic film management',
        'Standard support',
        'Community access'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: 29,
      period: 'month',
      description: 'Ideal for active filmmakers',
      features: [
        'Unlimited festival submissions',
        'Advanced film analytics',
        'Priority support',
        'Custom submission tracking',
        'Portfolio showcase',
        'Industry networking'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Studio',
      price: 99,
      period: 'month',
      description: 'For production companies',
      features: [
        'Everything in Pro',
        'Team collaboration tools',
        'Bulk submission management',
        'Advanced reporting',
        'Custom branding',
        'API access',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, all paid plans come with a 14-day free trial. No credit card required.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your filmmaking journey. Start free and upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105
                ${plan.popular ? 'border-blue-500 bg-gradient-to-b from-blue-900/20 to-gray-800' : 'border-gray-700'}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`
                w-full py-3 px-6 rounded-lg font-medium transition-all duration-300
                ${plan.popular 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
                }
              `}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Everything you need to succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-400">Access to 5000+ festivals worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Management</h3>
              <p className="text-gray-400">Streamlined submission process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-400">24/7 dedicated customer support</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;