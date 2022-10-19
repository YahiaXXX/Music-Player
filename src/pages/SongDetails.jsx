import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { DetailsHeader,Error,Loader,RelatedSongs } from "../components";
import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";


const SongDetails = ()=>{
    const {songid,id: artistId }=useParams()
    const dispatch=useDispatch()
    
    const {activeSong,isPlaying}=useSelector((state)=>state.player)
    
    const {data:songData,isFetching:isFetchingSongDetails}=useGetSongDetailsQuery({songid})
    const {data,isFetching:isFetchingRelatedSongs,error}=useGetSongRelatedQuery({songid})
    const handlePause=()=>{
        dispatch(playPause(false))
    
      }
      const handlePlay=(song,i)=>{
        dispatch(setActiveSong({song,data,i}))
        dispatch(playPause(true))
        
      }

    if(isFetchingSongDetails && isFetchingRelatedSongs) return <Loader title="Searching..." />
    if (error) return <Error/>
    return(
        <div className=" flex flex-col" >
            <DetailsHeader  songData={songData} />
            <div className=" mb-10" >
                <h2 className=" text-white text-3xl font-bold" >Lyrics:</h2>
                <div className="mt-5">
                    {songData?.sections[1].type==="LYRICS" 
                    ? songData?.sections[1].text.map((line,i)=>
                    <p className=" text-gray-400 text-base my-1" >{line}</p>
                    )
                    : <p className=" text-gray-400 text-base my-1">sorry, no lyrics found!!</p>
                    
                    
                    }


                </div>

            </div>
            <RelatedSongs 
            data={data} 
            isPlaying={isPlaying} 
            activeSong={activeSong}
            handlePause={handlePause}
            handlePlay={handlePlay}
            artistId={artistId}
            />

        </div>
    )
}
export default SongDetails;
