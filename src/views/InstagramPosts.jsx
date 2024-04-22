import './styles/instagram.css'
import { InstagramEmbed } from 'react-social-media-embed';

export default function InstagramPosts() {
  return (
    <div className='instagram-container'>
        <div className='instagram-content'>

            <div className="post">
                <InstagramEmbed url="https://www.instagram.com/rice_trio/" className='instagram-post'/>
            </div>
        </div>
    </div>
  )
}
