const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-b from-transparent to-black">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6 max-w-xl">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-300 transition duration-200">
          Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-600 transition duration-200">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
