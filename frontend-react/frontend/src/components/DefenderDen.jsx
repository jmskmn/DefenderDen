import React, { useState } from 'react';
import { Bell, Search, Menu, Book, MessageCircle, Building, Users } from 'lucide-react';

const navigationItems = [
  { id: 'courses', label: 'Courses', icon: Book },
  { id: 'forums', label: 'Forums', icon: MessageCircle },
  { id: 'campus', label: 'Campus Life', icon: Building },
  { id: 'chat', label: 'Dordt Chat', icon: Users },
];

const featuredCourses = [
  { id: 1, code: 'CS 101', name: 'Introduction to Programming', rating: 4.5, reviews: 45 },
  { id: 2, code: 'ENG 201', name: 'Advanced Writing', rating: 4.2, reviews: 32 },
  { id: 3, code: 'BIO 150', name: 'General Biology', rating: 4.7, reviews: 28 },
];

const recentDiscussions = [
  { id: 1, title: 'Tips for Core 100 Final', replies: 23, category: 'Courses' },
  { id: 2, title: 'Engineering Study Group', replies: 15, category: 'Forums' },
  { id: 3, title: 'Commons vs. Grille?', replies: 34, category: 'Campus Life' },
];

const Navbar = ({ activeTab, setActiveTab }) => (
  <nav className="bg-white shadow-sm w-full">
    <div className="mx-auto px-4">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <Menu className="h-6 w-6 text-gray-500 mr-4" />
          <h1 className="text-xl font-bold text-yellow-600">Defender Den</h1>
        </div>
          <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6 text-gray-500" />
          <div className="h-8 w-8 bg-yellow-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </nav>
);

const SearchBar = ({ activeTab }) => (
  <div className="mx-auto mb-8">
    <div className="relative">
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder={`Search for ${activeTab}...`}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
      />
    </div>
  </div>
);

const NavigationTabs = ({ activeTab, setActiveTab }) => (
  <div className="flex space-x-3 justify-center">
    {navigationItems.map(({ id, label, icon: Icon }) => (
      <button
        key={id}
        onClick={() => setActiveTab(id)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg shadow ${
          activeTab === id ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </button>
    ))}
  </div>
);

const FeaturedCourses = () => (
  <div className="col-span-2 bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold mb-4">Popular Courses</h2>
    <div className="space-y-4">
      {featuredCourses.map(course => (
        <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
          <div>
            <h3 className="font-medium text-gray-800">{course.code}</h3>
            <p className="text-gray-700">{course.name}</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-yellow-500">★</div>
            <span className="font-medium">{course.rating}</span>
            <span className="text-gray-500">({course.reviews} reviews)</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RecentActivity = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
    <div className="space-y-4">
      {recentDiscussions.map(discussion => (
        <div key={discussion.id} className="p-4 border rounded-lg hover:bg-gray-50">
          <h3 className="font-medium text-gray-800">{discussion.title}</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-700">{discussion.category}</span>
            <div className="flex items-center space-x-1 text-gray-500">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{discussion.replies}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DefenderDen = () => {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div className="flex-1 w-full px-6 py-6 max-w-screen-lg mx-auto">
        <SearchBar activeTab={navigationItems.find(tab => tab.id === activeTab)?.label || 'content'} />
        
        <div className="grid grid-cols-3 gap-6">
          <FeaturedCourses />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default DefenderDen;
