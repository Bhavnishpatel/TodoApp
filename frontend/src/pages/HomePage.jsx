import React, { useState } from 'react';
import { Menu, X, Check, Star, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import {Link} from "react-router-dom"

const HomePage = () => {

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-400 via-red-300 to-pink-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Welcome to Your
                <span className="block text-white">Ultimate TodoSync</span>
              </h1>
              <p className="text-xl text-red-50 mb-8 leading-relaxed">
                Transform your workflow with our intuitive dashboard. Track progress, manage tasks, and collaborate seamlessly with your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={"/signup"} className="bg-white text-red-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-400 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                      <Check className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold">Task Management</h3>
                      <p className="text-gray-600 text-sm">84% Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                      <Star className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold">Team Progress</h3>
                      <p className="text-gray-600 text-sm">46% In Progress</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                      <ArrowRight className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold">Projects</h3>
                      <p className="text-gray-600 text-sm">13% Not Started</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to stay organized, productive, and connected with your team in one beautiful dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-400 rounded-lg flex items-center justify-center mb-6">
                <Check className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Task Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Organize your tasks efficiently with our intuitive task management system. Set priorities, deadlines, and track progress with ease.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mb-6">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Work seamlessly with your team members. Share updates, assign tasks, and communicate in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your progress with detailed analytics and visual indicators. Stay on top of your goals and deadlines.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-400 rounded-lg flex items-center justify-center mb-6">
                <Menu className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customizable Interface</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalize your dashboard to match your workflow. Drag, drop, and organize widgets according to your preferences.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Responsive</h3>
              <p className="text-gray-600 leading-relaxed">
                Access your dashboard from anywhere. Our responsive design ensures a perfect experience on all devices.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-400 rounded-lg flex items-center justify-center mb-6">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Notifications</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay informed with intelligent notifications. Get updates that matter without the noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  />
                </div>
                
                <button
                  onClick={() => alert('Message submitted!')}
                  className="w-full bg-red-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-500 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-400 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">hello@dashboard.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">123 Dashboard Street<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
              <p className="text-gray-300 leading-relaxed">
                Your ultimate productivity companion for modern teams.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Dashboard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;