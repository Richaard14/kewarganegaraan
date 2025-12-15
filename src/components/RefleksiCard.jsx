import React, { useState } from 'react';

export default function RefleksiCard({ icon, title, description, details }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition text-sm font-semibold"
      >
        {isExpanded ? 'Tutup' : 'Baca Selengkapnya'}
      </button>

      {isExpanded && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg animate-fade-in">
          <div className="text-gray-800 space-y-2">
            {details.map((detail, index) => (
              <div key={index}>
                <h4 className="font-bold text-slate-900">{detail.title}</h4>
                <p className="text-sm ml-2">{detail.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
