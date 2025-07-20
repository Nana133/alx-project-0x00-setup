import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">Card Component</h2>
      <p>This is a reusable card component.</p>
    </div>
  );
};

export default Card;
