import { useState, useEffect } from 'react';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Controls({ audioRef }) {

    const viewport = useMediaQuery('(max-width:800px)');
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    }

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }, [isPlaying, audioRef]);

    return (
    <>
        <SkipPreviousIcon sx={{fontSize: viewport ? '2.5rem' : '3rem', cursor: 'pointer'}}/>
        {
        isPlaying ? <PauseIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', margin: '1rem 3rem 0 3rem', cursor: 'pointer', border: '1px #0f0f0f solid', borderRadius: '25px'}} onClick={togglePlayPause}/> :
        <PlayArrowIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', margin: '1rem 3rem 0 3rem', cursor: 'pointer', border: '1px #0f0f0f solid', borderRadius: '25px'}} onClick={togglePlayPause}/>
        }
        {/* <PlayArrowIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', margin: '1rem 3rem 0 3rem', cursor: 'pointer', border: '1px #0f0f0f solid', borderRadius: '25px'}}/> */}
        <SkipNextIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', cursor: 'pointer'}}/>
    </>
  )
}
