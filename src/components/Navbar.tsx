import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  FileText, 
  LogIn,
  Search,
  Bell,
  ShoppingBasket,
  MessageSquare,
  ChevronDown,
  Github
} from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        <Link to='/' ><span className="text-blue-500 text-2xl font-bold">M</span></Link>
        <div className="ml-8">
          <span className="text-sm text-gray-500">Team 1</span>
          <span className="ml-2 px-2 py-0.5 text-xs bg-gray-100 rounded-full">Free</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-gray-500" />
        <img src="https://flagcdn.com/w40/gb.png" alt="English" className="h-5 w-7" />
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
        </div>
        <Link to='/login'><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces" alt="Profile" className="w-8 h-8 rounded-full" /></Link> 
      </div>
    </div>
  </nav>
  );
}