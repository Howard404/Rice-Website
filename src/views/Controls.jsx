import { useState, useEffect } from 'react';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Controls({ audioRef, tracks, trackIndex, setTrackIndex, setCurrentTrack }) {

    const viewport = useMediaQuery('(max-width:800px)');
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    }

    // const skipForward = () => {};

    // const skipBackward = () => {};

    const handlePrevious = () => {
        if (trackIndex === 0) {
            let lastTrackIndex = tracks.length - 1;
            setTrackIndex(lastTrackIndex);
            setCurrentTrack(tracks[lastTrackIndex]);
          } else {
            setTrackIndex((prev) => prev - 1);
            setCurrentTrack(tracks[trackIndex - 1]);
          }

          setIsPlaying(false);
    };

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
          } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
          }

          setIsPlaying(false);
    };

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }, [isPlaying, audioRef]);

    return (
    <>
        <SkipPreviousIcon sx={{fontSize: viewport ? '2.5rem' : '3rem', cursor: 'pointer'}} onClick={handlePrevious}/>
        {
        isPlaying ? <PauseIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', margin: '1rem 3rem 0 3rem', cursor: 'pointer', border: '1px #0f0f0f solid', borderRadius: '25px'}} onClick={togglePlayPause}/> :
        <PlayArrowIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', margin: '1rem 3rem 0 3rem', cursor: 'pointer', border: '1px #0f0f0f solid', borderRadius: '25px'}} onClick={togglePlayPause}/>
        }
        {/* <PlayArrowIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', margin: '1rem 3rem 0 3rem', cursor: 'pointer', border: '1px #0f0f0f solid', borderRadius: '25px'}}/> */}
        <SkipNextIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', cursor: 'pointer'}} onClick={handleNext}/>
    </>
  )
}
