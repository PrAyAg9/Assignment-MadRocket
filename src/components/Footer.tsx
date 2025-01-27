import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img src="../../images/footerlogo.png" alt="Madrocket" className="h-24 ml-6" />
            </div>
            <p className="text-gray-400 text-sm">
              I am reay to work
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon href="#" icon="twitter" />
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="#" icon="instagram" />
              <SocialIcon href="#" icon="linkedin" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink text="About Us" />
              <FooterLink text="Academic " />
              <FooterLink text=" Catalog" />
              <FooterLink text="Student Portal" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink text="Help Center" />
              <FooterLink text="Contact Us" />
              <FooterLink text="FAQs" />
              <FooterLink text="Technical Support" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span>Learn and Apply</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span>ffcs@madrocket.ac.in</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-2" />
                <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Madrocket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: string }) => (
  <a
    href={href}
    className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
  >
    <i className={`fab fa-${icon}`}></i>
  </a>
);

const FooterLink = ({ text }: { text: string }) => (
  <li>
    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
      {text}
    </a>
  </li>
);

export default Footer;