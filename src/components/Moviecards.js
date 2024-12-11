import { IMG_CDN_URL } from "../utils/constant";

const Moviecards = ({ path }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + path}></img>
    </div>
  );
};

export default Moviecards;
