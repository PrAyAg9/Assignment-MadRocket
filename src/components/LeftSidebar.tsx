import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  LogIn,
} from 'lucide-react';

function LeftSidebar() {
    return (
      <aside className="fixed left-0 top-[57px] bottom-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          <nav className="space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg ' +
                (isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50')
              }
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </NavLink>
            <NavLink
              to="/students"
              className={({ isActive }) =>
                'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg ' +
                (isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50')
              }
            >
              <Users className="w-5 h-5" />
              Student's Page
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg ' +
                (isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50')
              }
            >
              <LogIn className="w-5 h-5" />
              Sign in
            </NavLink>
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
