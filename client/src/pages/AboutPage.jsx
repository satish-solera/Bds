import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl">
        Welcome to our amazing application! We are dedicated to providing you with the best experience possible. Our team is passionate about creating high-quality products that meet your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower individuals and businesses to achieve their goals through innovative solutions and unparalleled support.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            We envision a world where technology bridges gaps and creates opportunities for everyone.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white shadow-md rounded-sm p-4 m-2 text-center w-64">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-2" />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: 'JOHN JC',
    role: 'CEO',
    image: 'https://via.placeholder.com/150',
  },
  // {
  //   name: 'Bob Smith',
  //   role: 'CTO',
  //   image: 'https://via.placeholder.com/150',
  // },
  {
    name: 'JK JAMMY',
    role: 'Designer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'SAM HRNY',
    role: 'Designer',
    image: 'https://via.placeholder.com/150',
  },
];

export default About;