import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Calendar, Award, Users, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Explore: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Festivals' },
    { id: 'feature', name: 'Feature Film' },
    { id: 'short', name: 'Short Film' },
    { id: 'documentary', name: 'Documentary' },
    { id: 'animation', name: 'Animation' },
    { id: 'experimental', name: 'Experimental' }
  ];

  const festivals = [
    {
      id: 1,
      name: 'Sundance Film Festival',
      location: 'Park City, Utah',
      date: 'January 19-29, 2024',
      category: 'feature',
      entryFee: 75,
      submissions: 15000,
      rating: 4.9,
      deadline: '2024-01-15',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premier independent film festival showcasing innovative storytelling.',
      awards: ['Grand Jury Prize', 'Audience Award', 'Best Director'],
      isActive: true
    },
    {
      id: 2,
      name: 'Cannes Film Festival',
      location: 'Cannes, France',
      date: 'May 14-25, 2024',
      category: 'feature',
      entryFee: 0,
      submissions: 5000,
      rating: 4.8,
      deadline: '2024-03-01',
      image: 'https://images.pexels.com/photos/7991226/pexels-photo-7991226.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'The most prestigious film festival celebrating cinematic excellence.',
      awards: ['Palme d\'Or', 'Grand Prix', 'Best Director'],
      isActive: true
    },
    {
      id: 3,
      name: 'Toronto International Film Festival',
      location: 'Toronto, Canada',
      date: 'September 5-15, 2024',
      category: 'feature',
      entryFee: 100,
      submissions: 8000,
      rating: 4.7,
      deadline: '2024-07-01',
      image: 'https://images.pexels.com/photos/7991455/pexels-photo-7991455.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Major festival launching awards season with diverse programming.',
      awards: ['People\'s Choice Award', 'Platform Prize', 'Discovery Award'],
      isActive: true
    },
    {
      id: 4,
      name: 'Berlin International Film Festival',
      location: 'Berlin, Germany',
      date: 'February 15-25, 2024',
      category: 'feature',
      entryFee: 50,
      submissions: 12000,
      rating: 4.6,
      deadline: '2024-01-01',
      image: 'https://images.pexels.com/photos/7991123/pexels-photo-7991123.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'International festival celebrating political and artistic cinema.',
      awards: ['Golden Bear', 'Silver Bear', 'Crystal Bear'],
      isActive: true
    },
    {
      id: 5,
      name: 'Short Film Corner',
      location: 'Los Angeles, USA',
      date: 'March 10-15, 2024',
      category: 'short',
      entryFee: 25,
      submissions: 3000,
      rating: 4.5,
      deadline: '2024-02-01',
      image: 'https://images.pexels.com/photos/7991347/pexels-photo-7991347.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dedicated platform for short film creators and industry professionals.',
      awards: ['Best Short Film', 'Audience Choice', 'Student Award'],
      isActive: true
    },
    {
      id: 6,
      name: 'Documentary Film Festival',
      location: 'New York, USA',
      date: 'April 20-30, 2024',
      category: 'documentary',
      entryFee: 60,
      submissions: 4500,
      rating: 4.4,
      deadline: '2024-03-15',
      image: 'https://images.pexels.com/photos/7991664/pexels-photo-7991664.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Celebrating the art of documentary filmmaking and real stories.',
      awards: ['Best Documentary', 'Social Impact Award', 'Emerging Filmmaker'],
      isActive: true
    }
  ];

  const filteredFestivals = festivals.filter(festival => {
    const matchesSearch = festival.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         festival.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || festival.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Film Festivals
          </h1>
          <p className="text-gray-400 text-lg">
            Discover amazing festivals around the world and submit your films
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search festivals or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Festival Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFestivals.map((festival, index) => (
            <motion.div
              key={festival.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === festival.category)?.name}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{festival.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {festival.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {festival.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {festival.location}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {festival.date}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    {festival.submissions.toLocaleString()} submissions
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-blue-400">
                    ${festival.entryFee}
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Submit Film
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">
              No festivals found matching your criteria.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;