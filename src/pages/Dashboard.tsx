import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Award, Calendar, TrendingUp, Eye, Plus, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'films', label: 'My Films', icon: Film },
    { id: 'submissions', label: 'Submissions', icon: Calendar },
    { id: 'awards', label: 'Awards', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const stats = [
    { label: 'Total Films', value: 8, icon: Film, color: 'from-blue-500 to-purple-600' },
    { label: 'Submissions', value: 24, icon: Calendar, color: 'from-purple-500 to-pink-600' },
    { label: 'Awards Won', value: 5, icon: Award, color: 'from-pink-500 to-red-600' },
    { label: 'Festival Views', value: 1247, icon: Eye, color: 'from-red-500 to-orange-600' }
  ];

  const recentFilms = [
    {
      id: 1,
      title: 'Midnight Dreams',
      genre: 'Drama',
      duration: 95,
      status: 'Active',
      submissions: 12,
      awards: 2,
      poster: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Urban Legends',
      genre: 'Horror',
      duration: 82,
      status: 'Active',
      submissions: 8,
      awards: 1,
      poster: 'https://images.pexels.com/photos/7991226/pexels-photo-7991226.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'The Last Frame',
      genre: 'Documentary',
      duration: 67,
      status: 'Draft',
      submissions: 0,
      awards: 0,
      poster: 'https://images.pexels.com/photos/7991455/pexels-photo-7991455.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const recentSubmissions = [
    {
      id: 1,
      filmTitle: 'Midnight Dreams',
      festival: 'Sundance Film Festival',
      status: 'Under Review',
      submittedAt: '2024-01-15',
      fee: 75
    },
    {
      id: 2,
      filmTitle: 'Urban Legends',
      festival: 'Horror Film Festival',
      status: 'Accepted',
      submittedAt: '2024-01-10',
      fee: 50
    },
    {
      id: 3,
      filmTitle: 'Midnight Dreams',
      festival: 'Cannes Film Festival',
      status: 'Rejected',
      submittedAt: '2024-01-05',
      fee: 0
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Films */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Recent Films</h2>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Add Film</span>
          </button>
        </div>
        <div className="space-y-4">
          {recentFilms.map(film => (
            <div key={film.id} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
              <img
                src={film.poster}
                alt={film.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-white">{film.title}</h3>
                <p className="text-gray-400 text-sm">{film.genre} • {film.duration} min</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  film.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {film.status}
                </span>
                <div className="text-gray-400 text-sm mt-1">
                  {film.submissions} submissions • {film.awards} awards
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h2 className="text-xl font-bold mb-6">Recent Submissions</h2>
        <div className="space-y-4">
          {recentSubmissions.map(submission => (
            <div key={submission.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-semibold text-white">{submission.filmTitle}</h3>
                <p className="text-gray-400 text-sm">{submission.festival}</p>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  submission.status === 'Accepted' ? 'bg-green-500/20 text-green-400' :
                  submission.status === 'Rejected' ? 'bg-red-500/20 text-red-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {submission.status}
                </span>
                <div className="text-gray-400 text-sm mt-1">
                  {submission.submittedAt} • ${submission.fee}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, {user?.name}
          </h1>
          <p className="text-gray-400 text-lg">
            Track your films, submissions, and achievements
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-700 mb-8">
          <nav className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors
                  ${activeTab === tab.id 
                    ? 'border-blue-500 text-blue-400' 
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                  }
                `}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="min-h-screen">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'films' && (
            <div className="text-center py-12">
              <p className="text-gray-400">Films management coming soon...</p>
            </div>
          )}
          {activeTab === 'submissions' && (
            <div className="text-center py-12">
              <p className="text-gray-400">Submissions tracking coming soon...</p>
            </div>
          )}
          {activeTab === 'awards' && (
            <div className="text-center py-12">
              <p className="text-gray-400">Awards showcase coming soon...</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="text-center py-12">
              <p className="text-gray-400">Settings panel coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;