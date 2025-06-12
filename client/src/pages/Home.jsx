import React from 'react';
export default function Home() {
  console.log("✅ Home component loaded");
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">This is the home page of my MERN stack portfolio.</p>
    </div>
  );
}

