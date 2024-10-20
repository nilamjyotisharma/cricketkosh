import Link from 'next/link';
import React from 'react';

const Capsule = ({ pColor, color, icon: Icon, heading, link }) => {
  // Predefined mappings for the colors
  const bgColorClasses = {
    blue: 'bg-blue-50',
    orange: 'bg-orange-50',
    green: 'bg-green-50',
    red: 'bg-red-50',
    indigo: 'bg-indigo-50',
  };

  const textColorClasses = {
    blue: 'text-blue-500',
    orange: 'text-orange-500',
    green: 'text-green-500',
    red: 'text-red-500',
    indigo: 'text-indigo-500',
  };

  return (
    <Link href={link}>
      <div className="flex items-center space-x-2 px-12 py-4 border-2 border-gray-100 rounded-lg bg-white my-4 mx-8 font-bold w-[20rem] justify-center h-18 shadow-xl hover:scale-110 duration-500">
        <div className={`p-3 rounded-full ${bgColorClasses[pColor]}`}>
          <Icon className={`text-lg ${textColorClasses[color]}`} />
        </div>
        <h>{heading}</h>
      </div>
    </Link>
  );
};

export default Capsule;
