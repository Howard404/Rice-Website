
export default function DisplayTrack({ currentTrack, audioRef }) {
  return (
    <>
        <h1>Rice</h1>
        <h3>{currentTrack.title}</h3>
        <audio src={currentTrack.src} ref={audioRef} ></audio>
    </>
  )
}
