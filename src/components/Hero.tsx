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

export function Hero() {
  return (
      <><h1 className="text-2xl font-semibold mb-6 mt-8">Hi, Welcome back 👋</h1><div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <ShoppingBasket className="w-8 h-8 text-blue-600" />
          <span className="text-green-600 text-sm">+2.6%</span>
        </div>
        <p className="text-sm text-gray-600">Weekly sales</p>
        <p className="text-2xl font-bold">714k</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <Users className="w-8 h-8 text-purple-600" />
          <span className="text-red-600 text-sm">-0.1%</span>
        </div>
        <p className="text-sm text-gray-600">New users</p>
        <p className="text-2xl font-bold">1.35m</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <ShoppingBag className="w-8 h-8 text-yellow-600" />
          <span className="text-green-600 text-sm">+2.8%</span>
        </div>
        <p className="text-sm text-gray-600">Purchase orders</p>
        <p className="text-2xl font-bold">1.72m</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <MessageSquare className="w-8 h-8 text-red-600" />
          <span className="text-green-600 text-sm">+3.6%</span>
        </div>
        <p className="text-sm text-gray-600">Messages</p>
        <p className="text-2xl font-bold">234</p>
      </div>
    </div><div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Current visits</h2>
          <div className="h-64 flex items-center justify-center text-gray-500">
            [Pie Chart -- coming soon]
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Website visits</h2>
          <p className="text-sm text-gray-600">(+43%) than last year</p>
          <div className="h-64 flex items-center justify-center text-gray-500">
            [Bar Chart -- Coming soon]
          </div>
        </div>
      </div><div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Current visits</h2>
          <div className="h-64 flex items-center justify-center text-gray-500">
            [Pie Chart -- coming soon]
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Website visits</h2>
          <p className="text-sm text-gray-600">(+43%) than last year</p>
          <div className="h-64 flex items-center justify-center text-gray-500">
            [Bar Chart -- Coming soon]
          </div>
        </div>
      </div><a href="https://github.com" className="fixed bottom-4 right-4 p-2 bg-white rounded-full shadow-lg">
        <Github className="w-6 h-6" />
      </a></>
  );
}