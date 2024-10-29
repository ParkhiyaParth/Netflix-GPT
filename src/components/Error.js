import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700">
          You are not signed out. Please try again.
        </p>
      </div>
    </div>
  );
};

export default Error;
