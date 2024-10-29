import Header from "./Header";

const Browse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col text-white">
      <Header />
      <div className="container mx-auto px-4 py-24 flex-grow">
        <h1 className="text-5xl font-extrabold mb-6 text-center">Browse</h1>
        <p className="text-xl text-center mb-8">Welcome to the Browse page!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example items */}
          <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Item 1</h2>
            <p className="text-lg">Description for item 1.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Item 2</h2>
            <p className="text-lg">Description for item 2.</p>
          </div>
          {/* Add more items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Browse;
