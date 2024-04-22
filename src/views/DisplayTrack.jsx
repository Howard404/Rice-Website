
export default function DisplayTrack({ currentTrack, audioRef }) {
  return (
    <>
        <h1>Rice</h1>
        <h3>Slow Down</h3>
        <audio src={currentTrack.src} ref={audioRef} ></audio>
    </>
  )
}
