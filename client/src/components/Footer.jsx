import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      &copy; {new Date().getFullYear()} Shivam Kumar. All rights reserved.
    </footer>
  );
}
