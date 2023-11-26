import React from 'react'

export default function ComponentHeading(props: { title: string }) {
    
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-white text-4xl font-bold mb-5">{props.title}</h2>
      <div className="bg-gray-700 h-1.5 w-48 rounded-lg mb-10"></div>
    </div>
  );
}
