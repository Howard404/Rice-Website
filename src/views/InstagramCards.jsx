import "./styles/instagram-cards.css"

function InstagramCards() {

  return (
    <div className="cards">

      <div className="card-item item-1">
        <a href="https://www.instagram.com/p/Ct9Zh2hxH7U/?img_index=1" className="description">
          <div>
            <p>Live at the Emerald</p>
          </div>
        </a>
        <img src="./images/Ryan_and_Luke.jpg" alt="" className="item-image" />
      </div>

      <div className="card-item item-2">
      <a href="https://www.instagram.com/p/Cf2U0fBPqcg/?img_index=1" className="description">
          <div>
            <p>Rice at OCF</p>
          </div>
      </a>
        <img src="./images/Band_and_Crowd.jpg" alt="" className="item-image" />
      </div>

      <div className="card-item item-3">
        <a href="https://www.instagram.com/p/C10G-Nkv0Pc/?img_index=1" className="description">
          <div>
            <p>Tri Town Get Down!</p>
          </div>
        </a>
        <img src="./images/Rice.jpg" alt="" className="item-image"/>
      </div>

      <div className="card-item item-4">
        <a href="https://www.instagram.com/p/CzcMDpdPqbH/?img_index=1" className="description">
          <div className="description">
            <p>Rays Golden Lion</p>
          </div>
        </a>
        <img src="./images/Ryan-RGL.jpeg" alt="" className="item-image"/>
      </div>

      <div className="card-item item-5">
        <a href="https://www.instagram.com/ffu_ts/" className="description">
          <div>
              <p>Just Carson 😍</p>
          </div>
        </a>
        <img src="./images/Carson.jpg" alt="" className="item-image" />
      </div>
    </div>
  )
}

export default InstagramCards
