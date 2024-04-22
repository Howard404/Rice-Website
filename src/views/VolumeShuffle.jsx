import { useState, useEffect } from 'react';

import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ShuffleIcon from '@mui/icons-material/Shuffle';

export default function VolumeShuffle({audioRef, tracks, setTrackIndex, setCurrentTrack}) {
  const [isVolumeActive, setVolumeActive] = useState(false);
  const [volume, setVolume] = useState(50);

  const handleVolume = () => {
    setVolumeActive((prev) => !prev);
  }

  const handleShuffle = () => {
    let randIndex = Math.round(Math.random() * 1);

    console.log(randIndex);
   
    setTrackIndex(randIndex);
    setCurrentTrack(tracks[randIndex]);

  }

  useEffect(() => {
    const volumeIcon = document.querySelector('.volume');
    if (volumeIcon) {
      volumeIcon.style.visibility = isVolumeActive ? 'visible' : 'hidden';
    }
  }, [isVolumeActive]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return (
    <> 
      <div className="volume-control">
        <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(e.target.value)} className='volume'/>
      </div>   
      <div className="shuffle-volume-container">
          <ShuffleIcon sx={{cursor: 'pointer'}} onClick={handleShuffle}/>
          <VolumeUpIcon sx={{cursor: 'pointer'}} onClick={handleVolume}/>
      </div>
    </>
  )
}
