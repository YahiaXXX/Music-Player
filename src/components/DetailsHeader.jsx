import { Link } from "react-router-dom";
import RelatedSongs from "./RelatedSongs";

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <div className=" relative w-full flex flex-col">
    <div>
      <div className=" w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className=" absolute flex inset-0 items-center">
        <img
          className=" sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          src={
            artistId
              ? artistData?.artists[artistId]?.attributes?.artwork?.url
                  .replace("{w}", "500")
                  .replace("{h}", "500")
              : songData?.images?.coverart
          }
          alt="art"
        />
        <div className=" ml-5">
          <p className=" sm:text-3xl text-xl font-bold text-white">
            {artistId
              ? artistData?.artists[artistId]?.attributes?.name
              : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className=" text-base mt-2 text-gray-400">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <p className=" sm:text-3xl text-xl font-bold text-white">
            {artistId
              ? artistData?.artists[artistId]?.attributes?.genreNames[0]
              : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className=" w-full sm:h-44 h-24" />
    </div>
  </div>
);

export default DetailsHeader;
