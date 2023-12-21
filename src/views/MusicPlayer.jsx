
import './styles/music_player.css'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useMediaQuery from '@mui/material/useMediaQuery';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

export default function MusicPlayer() {

    const viewport = useMediaQuery('(max-width:800px)');


  return (
    <div className='music-container'>
        <div className="music-content white-player-border">

            <div className="music-image-song">
                <img src="/images/song_1.jpg" alt="Ryan" />

                <div className="artist-song">
                    <h1>Rice</h1>
                    <h3>Slow Down</h3>
                </div>
            </div>

            <div className="music-controls">
                <div className="controls">
                    <SkipPreviousIcon sx={{fontSize: viewport ? '2.5rem' : '3rem', cursor: 'pointer'}}/>
                    <PlayArrowIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', margin: '1rem 3rem 0 3rem', cursor: 'pointer', border: '1px #0f0f0f solid', borderRadius: '25px'}}/>
                    <SkipNextIcon sx={{ fontSize: viewport ? '2.5rem' : '3rem', cursor: 'pointer'}}/>
                </div>
            </div>

            <div className="music-song-list">
                <div className="song-list">
                    <div className="song">< PlayCircleFilledWhiteIcon sx={{fontSize: '2rem'}}/> <span>Slow Down</span></div>
                    <div className="song">< PlayCircleFilledWhiteIcon sx={{fontSize: '2rem'}}/> <span>Hey Ruby</span></div>
                    <div className="song">< PlayCircleFilledWhiteIcon sx={{fontSize: '2rem'}}/> <span>East 13<sup>th</sup></span></div>
                </div>
            </div>

            <div className="shuffle-volume-container">
                <ShuffleIcon sx={{cursor: 'pointer'}}/>
                <VolumeUpIcon sx={{cursor: 'pointer'}}/>
            </div>
        </div>
    </div>
  )
}
