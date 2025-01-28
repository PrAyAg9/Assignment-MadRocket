import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import {
  Search,
  Bell,
  ChevronDown,
} from 'lucide-react';

interface TeamData {
  name: string;
  version: string;
}

export default function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // State to manage profile dropdown visibility
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  // State to manage team dropdown visibility
  const [isTeamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const teamDropdownRef = useRef<HTMLDivElement>(null);

  // State to manage selected team
  const [selectedTeam, setSelectedTeam] = useState<TeamData>({
    name: 'Team 1',
    version: 'Free',
  });

  // Data for teams
  const teams: TeamData[] = [
    { name: 'Team 1', version: 'Free' },
    { name: 'Team 2', version: 'Paid' },
    { name: 'Team 3', version: 'Paid' },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
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

  // Function to handle team selection
  const handleTeamSelection = (team: TeamData) => {
    setSelectedTeam(team);
    setTeamDropdownOpen(false);
  };

  // Get version label color based on version
  const getVersionLabelColor = (version: string) => {
    if (version === 'Free') {
      return 'bg-green-100 text-green-800';
    } else {
      return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Side: Logo and Team Dropdown */}
        <div className="flex items-center gap-2 relative" ref={teamDropdownRef}>
          <Link to="/">
            <span className="text-blue-500 text-2xl font-bold">M</span>
          </Link>
          {/* Team Dropdown */}
          <div
            className="ml-8 flex items-center cursor-pointer"
            onClick={() => setTeamDropdownOpen(!isTeamDropdownOpen)}
          >
            <span className="text-sm text-gray-500">{selectedTeam.name}</span>
            <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
          </div>
          {isTeamDropdownOpen && (
            <div className="absolute left-12 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              {teams.map((team) => (
                <button
                  key={team.name}
                  onClick={() => handleTeamSelection(team)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  {team.name}
                </button>
              ))}
            </div>
          )}
          <span
            className={`ml-2 px-2 py-0.5 text-xs rounded-full ${getVersionLabelColor(
              selectedTeam.version
            )}`}
          >
            {selectedTeam.version}
          </span>
        </div>

        {/* Right Side: Icons and Profile */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-500" />
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="English"
            className="h-5 w-7"
          />
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </div>
          {/* Profile Section */}
          <div
            className="relative"
            ref={profileDropdownRef}
          >
            <button
              onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center focus:outline-none"
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
            </button>
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
