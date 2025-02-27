import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Home, ShoppingBag, BookOpen, LogIn, LogOut } from 'lucide-react';

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/marketplace" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <ShoppingBag size={20} />
              <span>Marketplace</span>
            </Link>
            <Link to="/fact-checker" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <BookOpen size={20} />
              <span>Article Hunter</span>
            </Link>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            ) : (
              <Link to="/login" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <LogIn size={20} />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};