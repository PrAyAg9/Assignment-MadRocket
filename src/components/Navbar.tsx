import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Bell,
  ChevronDown,
} from 'lucide-react';
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // State to manage profile dropdown visibility
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  // State to manage team dropdown visibility and selection
  const [isTeamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<'Team 1' | 'Team 2' | 'Team 3'>('Team 1');
  const teamDropdownRef = useRef<HTMLDivElement>(null);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Error logging out');
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close profile dropdown if clicked outside
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
      // Close team dropdown if clicked outside
      if (
        teamDropdownRef.current &&
        !teamDropdownRef.current.contains(event.target as Node)
      ) {
        setTeamDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle team selection
  const handleTeamSelection = (team: 'Team 1' | 'Team 2' | 'Team 3') => {
    setSelectedTeam(team);
    setTeamDropdownOpen(false);
    // Optional: Implement further logic based on team selection
    // For example, navigate to different team dashboards or update user data
  };

  // Determine team status based on selection
  const teamStatus = selectedTeam === 'Team 1' ? 'Free' : 'Paid';
  const teamStatusColor = selectedTeam === 'Team 1' ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100';

  if (loading) {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Placeholder for loading state */}
          <div className="text-center w-full">Loading...</div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10 shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Side: Logo and Team Dropdown */}
        <div className="flex items-center gap-2 relative" ref={teamDropdownRef}>
          <Link to="/">
            <span className="text-blue-500 text-2xl font-bold">M</span>
          </Link>
          {/* Team Dropdown Toggle */}
          <div
            className="ml-8 flex items-center cursor-pointer select-none"
            onClick={() => setTeamDropdownOpen(!isTeamDropdownOpen)}
          >
            <span className="text-sm font-medium text-gray-700">{selectedTeam}</span>
            <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
          </div>
          {/* Team Status Badge */}
          <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${teamStatusColor}`}>
            {teamStatus}
          </span>

          {/* Team Dropdown Menu */}
          {isTeamDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <button
                onClick={() => handleTeamSelection('Team 1')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Team 1
              </button>
              <button
                onClick={() => handleTeamSelection('Team 2')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Team 2 (Paid)
              </button>
              <button
                onClick={() => handleTeamSelection('Team 3')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Team 3 (Paid)
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Icons and Profile Dropdown */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-600" />
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="English"
            className="h-5 w-7 cursor-pointer"
          />
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </div>
          {/* Profile Dropdown */}
          <div
            className="relative"
            ref={profileDropdownRef}
          >
            <div
              className="flex items-center cursor-pointer select-none"
              onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <img
                src={
                  user?.photoURL ||
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
                }
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
            </div>
            {/* Profile Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                {user ? (
                  <>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setProfileDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
