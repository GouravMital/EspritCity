import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LoginForm } from './components/LoginForm';
import { CreatePost } from './components/CreatePost';
import { PostList } from './components/PostList';
import { MarketplaceForm } from './components/MarketplaceForm';
import { ServiceList } from './components/ServiceList';
import { FactChecker } from './components/FactChecker';
import { useAuthStore } from './store/authStore';

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={
              <div>
                <h1 className="text-3xl font-bold mb-8">Community Share</h1>
                {isAuthenticated && <CreatePost />}
                <PostList />
              </div>
            } />
            <Route path="/marketplace" element={
              <div>
                <h1 className="text-3xl font-bold mb-8">Marketplace</h1>
                {isAuthenticated && <MarketplaceForm />}
                <ServiceList />
              </div>
            } />
            <Route path="/fact-checker" element={<FactChecker />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;