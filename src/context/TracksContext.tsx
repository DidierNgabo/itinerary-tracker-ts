import React, {createContext,useState} from "react";
import { TracksContextState,ITrack } from "./types";


const contextDefaultValue:TracksContextState = {
    tracks:[],
    addTrack:()=>{},
    removeTrack:()=>{}
}; 

export const TracksContext = createContext<TracksContextState>(contextDefaultValue);


type TrackContextProviderProps = {
    children:React.ReactNode
}

const TracksProvider = ({children}:TrackContextProviderProps) =>{
    const [tracks, setTracks] = useState<ITrack[]>(contextDefaultValue.tracks);

    const addTrack = (newTrack:any) => setTracks((tracks)=>[...tracks,newTrack]);

    const removeTrack = async (id:number) => {
        setTracks(tracks.filter((track) => track.id !== id));
        console.log(tracks);
      };
    const value ={
        tracks,
        setTracks,
        addTrack,
        removeTrack,
    }
    return (
        <TracksContext.Provider value={value}>{children}</TracksContext.Provider>
    )
}

export default TracksProvider;