import { Outlet, Link } from "react-router-dom";
import { Home } from "lucide-react";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-2 text-indigo-600">
          <Home className="w-6 h-6" />
          <span className="text-xl font-bold tracking-tight">RentEase</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          <a href="#resources" className="hover:text-indigo-600 transition-colors">Resources</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-semibold text-slate-700 hover:text-indigo-600">
            Log In
          </Link>
          <Link to="/register" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Basic Footer placeholder */}
      <footer className="border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
        <p>&copy; 2026 RentEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
