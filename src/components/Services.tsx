import React from 'react';
import { Workflow, LogInIcon } from 'lucide-react';
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

const services = [
  {
    icon: <Workflow className="w-8 h-8" />,
    title: 'Students Page',
    description: 'A simple table page with students list, column names will be : ID, Name, Class, Section, Roll Number, Action [ Action column will have three icons for View, Edit, Delete, and an add student button.',
    link: '/students', 
  },
  {
    icon: <LogInIcon className="w-8 h-8" />,
    title: 'Login Page',
    description: 'A login Page linked to firebase use user@123.com the test email id for it',
    link: '/login', 
  }
];

export function Services() {
  return (

    <section className="py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-gray-600">Student Page & Login Page using firebase</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>  {/* Wrap each service in a Link */}
              <div className="p-8 border rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
