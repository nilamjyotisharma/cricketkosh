import Link from 'next/link';
import React from 'react';

const Capsule = ({ pColor, color, icon: Icon, heading, link }) => {
  return (
    <Link href={link}>
      <div className="flex items-center space-x-3 px-12 py-4 border-2 border-gray-100 rounded-lg bg-white my-4 mx-8 font-bold w-[20rem] justify-center h-18 shadow-xl hover:scale-110 duration-500 cursor-pointer">
        <div className={`p-3 rounded-full bg-${color}`}>
          <Icon className={`text-lg text-${pColor}`} />
        </div>
        <h>{heading}</h>
      </div>
    </Link>
  );
};

export default Capsule;
