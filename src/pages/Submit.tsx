import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Film, Info, CreditCard, Check } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Submit: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    duration: '',
    year: '',
    description: '',
    trailer: '',
    poster: null as File | null,
    festivals: [] as string[]
  });

  const steps = [
    { number: 1, title: 'Film Details', icon: Film },
    { number: 2, title: 'Media Upload', icon: Upload },
    { number: 3, title: 'Festival Selection', icon: Info },
    { number: 4, title: 'Payment', icon: CreditCard }
  ];

  const genres = [
    'Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Romance', 
    'Sci-Fi', 'Thriller', 'Documentary', 'Animation', 'Musical', 'Western'
  ];

  const availableFestivals = [
    { id: '1', name: 'Sundance Film Festival', fee: 75 },
    { id: '2', name: 'Cannes Film Festival', fee: 0 },
    { id: '3', name: 'Toronto International Film Festival', fee: 100 },
    { id: '4', name: 'Berlin International Film Festival', fee: 50 },
    { id: '5', name: 'Short Film Corner', fee: 25 },
    { id: '6', name: 'Documentary Film Festival', fee: 60 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, poster: file }));
    }
  };

  const toggleFestival = (festivalId: string) => {
    setFormData(prev => ({
      ...prev,
      festivals: prev.festivals.includes(festivalId)
        ? prev.festivals.filter(id => id !== festivalId)
        : [...prev.festivals, festivalId]
    }));
  };

  const getTotalFee = () => {
    return formData.festivals.reduce((total, festivalId) => {
      const festival = availableFestivals.find(f => f.id === festivalId);
      return total + (festival?.fee || 0);
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Handle final submission
      alert('Film submitted successfully!');
      navigate('/dashboard');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please log in to submit films</h2>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Submit Your Film
          </h1>
          <p className="text-gray-400 text-lg">
            Share your story with festivals worldwide
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2 
                  ${currentStep >= step.number 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-600 text-gray-400'
                  }
                `}>
                  {currentStep > step.number ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`
                    w-full h-1 mx-4 
                    ${currentStep > step.number ? 'bg-blue-600' : 'bg-gray-600'}
                  `} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                {step.title}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          {/* Step 1: Film Details */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Film Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Film Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Director</label>
                  <input
                    type="text"
                    name="director"
                    value={formData.director}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Genre</label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Genre</option>
                    {genres.map(genre => (
                      <option key={genre} value={genre}>{genre}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Duration (minutes)</label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Year</label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Trailer URL (optional)</label>
                  <input
                    type="url"
                    name="trailer"
                    value={formData.trailer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Media Upload */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Media Upload</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Poster Image</label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">
                      Drop your poster image here or click to browse
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="poster-upload"
                    />
                    <label
                      htmlFor="poster-upload"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      Choose File
                    </label>
                    {formData.poster && (
                      <p className="text-green-400 mt-2">File selected: {formData.poster.name}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Festival Selection */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Select Festivals</h2>
              <div className="space-y-4">
                {availableFestivals.map(festival => (
                  <div
                    key={festival.id}
                    className={`
                      p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.festivals.includes(festival.id)
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-600 hover:border-gray-500'
                      }
                    `}
                    onClick={() => toggleFestival(festival.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{festival.name}</h3>
                        <p className="text-gray-400 text-sm">Submit your film to this festival</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-400">
                          ${festival.fee}
                        </div>
                        <div className="text-sm text-gray-400">Entry fee</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-blue-400">${getTotalFee()}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Payment</h2>
              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-2">
                    {formData.festivals.map(festivalId => {
                      const festival = availableFestivals.find(f => f.id === festivalId);
                      return (
                        <div key={festivalId} className="flex justify-between">
                          <span>{festival?.name}</span>
                          <span>${festival?.fee}</span>
                        </div>
                      );
                    })}
                    <div className="border-t border-gray-600 pt-2 mt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-blue-400">${getTotalFee()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 mb-4">
                    This is a demo. No actual payment will be processed.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              className={`
                px-6 py-3 rounded-lg transition-colors
                ${currentStep === 1 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-700 text-white hover:bg-gray-600'
                }
              `}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {currentStep === 4 ? 'Submit Film' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;