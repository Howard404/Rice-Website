
import './styles/music_player.css'

import { useRef, useState } from 'react';
import { tracks } from  './data/tracks'
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Controls from './Controls';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

// import ProgressBar from './ProgressBar';

import DisplayTrack from './DisplayTrack';
import VolumeShuffle from './VolumeShuffle'

export default function MusicPlayer() {

    // const viewport = useMediaQuery('(max-width:800px)');

    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    // const [timeProgress, setTimeProgress] = useState(0);
    // const [duration, setDuration] = useState(0);

    const audioRef = useRef();
    // const progressBarRef = useRef();

    const handleSlowDown = () => {
        setTrackIndex(0);
        setCurrentTrack(tracks[0]);
    }

    const handleHeyRuby = () => {
        setTrackIndex(1);
        setCurrentTrack(tracks[1]);
    }    

  return (
    <div className='music-container'>
        <div className="music-content white-player-border">

            <div className="music-image-song">
                <img src="/images/song_1.jpg" alt="Ryan" />

                <div className="artist-song">
                    <DisplayTrack 
                    currentTrack={ currentTrack }
                    audioRef={audioRef}
                    />
                </div>
            </div>

            {/* <div className="progress-bar-container">
                <ProgressBar {...{progressBarRef, audioRef, timeProgress, duration}}/>
            </div>                 */}

            <div className="music-controls">
                <div className="controls">
                    <Controls 
                    {...{
                        audioRef,
                        tracks,
                        trackIndex,
                        setTrackIndex,
                        setCurrentTrack,
                    }}
                    />
                    {/* <SkipPreviousIcon sx={{fontSize: viewport ? '2.5rem' : '3rem', cursor: 'pointer'}}/>
                    <PlayArrowIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', margin: '1rem 3rem 0 3rem', cursor: 'pointer', border: '1px #0f0f0f solid', borderRadius: '25px'}}/>
                    <SkipNextIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', cursor: 'pointer'}}/> */}
                </div>
            </div>

            {/* <div className="audio-file">
                <audio>
                    <source src='/audio/Slow_Down.wav'/>  
                </audio>
            </div> */}

            <div className="music-song-list">
                <div className="song-list">
                    <div className="song slow-down" onClick={handleSlowDown}>< PlayCircleFilledWhiteIcon sx={{fontSize: '2rem'}}/> <span>Slow Down</span></div>
                    <div className="song hey-ruby" onClick={handleHeyRuby}>< PlayCircleFilledWhiteIcon sx={{fontSize: '2rem'}}/> <span>Hey Ruby</span></div>
                    <div className="song east-13th">< PlayCircleFilledWhiteIcon sx={{fontSize: '2rem'}}/> <span>East 13<sup>th</sup></span></div>
                </div>
            </div>

            {/* <div className="shuffle-volume-container"> */}
                {/* <ShuffleIcon sx={{cursor: 'pointer'}}/>
                <VolumeUpIcon sx={{cursor: 'pointer'}}/> */}
                <VolumeShuffle{...{audioRef, tracks, setTrackIndex, setCurrentTrack}}/>
            {/* </div> */}
        </div>
    </div>
  )
}
