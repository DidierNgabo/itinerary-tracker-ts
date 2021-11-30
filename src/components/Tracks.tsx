import Track from "./Track"
import { useContext,useEffect } from "react";
import { TracksContext } from "../context/TracksContext";

const Tracks = () => {
    const {tracks} = useContext(TracksContext);

    // useEffect(() => {
    //     const populateState = async () => {
    //       const dataFromServer = await getData();
    //       setTracks(dataFromServer);
    //     };
    //     populateState();
    //     console.log(tracks);
    //   }, []);
    return (
        <div className="">
            {
        tracks.map((track)=>(
            <Track key={track.id} data={track}  />
        ))
    }
        </div>
    )
}

export default Tracks
