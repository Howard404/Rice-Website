import './styles/progress_bar.css'

export default function ProgressBar({ progressBarRef, audioRef, timeProgress, duration}) {

    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    };

  return (
    <div className="progress">
        <span className="time current">{timeProgress}</span>
        <input 
        type="range" 
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
        />
        <span className="time">{duration}</span>
    </div>
  )
}
