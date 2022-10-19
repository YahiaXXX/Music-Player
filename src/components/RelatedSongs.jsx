import SongBar from "./SongBar";


const RelatedSongs = ({data,isPlaying,activeSong,handlePause,handlePlay,artistId}) => (
  <div className=" flex flex-col" >
    <h1 className=" font-bold text-3xl text-white" >Related Songs:</h1>
    <div className=" mt-6 w-full flex flex-col" >
      {data?.map((song,index)=>
      <SongBar 
      key={`${song.key}-${artistId}`} 
      song={song}
      i={index}
      artistId={artistId}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePauseClick={handlePause}
      handlePlayClick={handlePlay}      
      
      />)}

    </div>
  </div>
);

export default RelatedSongs;
