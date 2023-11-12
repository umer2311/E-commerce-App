import React from 'react';

const SubscribeCard = () => {
  return (
    <div className="bg-gray-300 my-6 px-4 py-6 min-w-full  max-w-screen-md mx-auto  shadow-md flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-2 text-red-400">Subscribe</h2>
      <p className="text-white mb-4 text-center">
        Subscribe to our newsletter for updates and promotions.
      </p>
      <div className="flex items-center gap-3">
        <input
          type="email"
          className="w-80 p-2 border border-gray-400  focus:outline-none focus:ring focus:border-yellow-400"
          placeholder="Enter your email"
        />
        <button className="bg-yellow-400 text-black p-2  hover:bg-yellow-500">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeCard;