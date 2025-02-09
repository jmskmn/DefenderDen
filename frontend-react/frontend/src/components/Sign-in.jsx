import React, { useState } from 'react';
import { Bell, Search, Menu, Book, MessageCircle, Building, Users } from 'lucide-react';
import { useAuth } from './AuthProvider';
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
          

          <button 
            onClick={() => (window.location.href = "/second")} 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Sign In
          </button>


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
const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logic to handle form submission
      console.log("Submitted Username: ", username);
      console.log("Submitted Password: ", password);
    };
  
    return (
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
  
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
    );
  };
  const SignIn = () => {
    const { signIn, account, signOut, isLoggingIn } = useAuth();
  
    return (
      <div className="w-full min-h-screen bg-gray-50 flex flex-col">
        <h1 className="text-center text-3xl">Sign In</h1>
        
        {/* Microsoft Sign-In Button */}
        {!account ? (
          <button
            disabled={isLoggingIn} 
            onClick={signIn}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full max-w-xs mx-auto"
          >
            Sign in with Microsoft
          </button>
        ) : (
          <div>
            <h2>Welcome, {account.username}</h2>
            <button
              onClick={signOut}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 w-full max-w-xs mx-auto"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default SignIn;
