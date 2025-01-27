import React from 'react';
import { Link } from 'react-router-dom';
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

function LeftSidebar() {
    return (
      <aside className="fixed left-0 top-[57px] bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
    <nav className="space-y-1">
      <Link
        to="/"
        className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg"
      >
        <LayoutDashboard className="w-5 h-5" />
        Dashboard
      </Link>
      <Link
        to="/students"
        className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
      >
        <Users className="w-5 h-5" />
        Student's Page
      </Link>
      <Link
        to="/login"
        className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
      >
        <LogIn className="w-5 h-5" />
        Sign in
      </Link>
    </nav>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-purple-600 font-medium">More features?</p>
            <p className="text-sm text-gray-600 mt-1">From only $69</p>
            <button className="mt-4 w-full bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </aside>
        );
    }
export default LeftSidebar;