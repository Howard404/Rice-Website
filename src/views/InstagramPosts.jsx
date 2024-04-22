import './styles/instagram.css'
import { InstagramEmbed } from 'react-social-media-embed';

export default function InstagramPosts() {
  return (
    <div className='instagram-container'>
        <h1>Gram</h1>
        <h3>If you want...</h3>
        <div className='instagram-content'>
                <InstagramEmbed url="https://www.instagram.com/rice_trio/" className='instagram-post'/>
        </div>
    </div>
  )
}
