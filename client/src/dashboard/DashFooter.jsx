import React from 'react';

const DashFooter = () => {
  return (
    <footer className="mt-auto text-xs text-gray-500">
      <ul className="space-y-2">
        <li>
          <a href="#" className="hover:text-white">TestersHive Guidelines</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Cookie Settings</a>
        </li>
      </ul>
      <p className="text-xs mt-4 text-gray-500">© TestersHive</p>
    </footer>
  );
};

export default DashFooter;
