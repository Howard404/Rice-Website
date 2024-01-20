import "./styles/instagram-cards.css"

function InstagramCards() {


  return (
    <div className="cards">

      <div className="card-item item-1">
        <div className="description">
          <p>Ryan and Luke take the stage!</p>
        </div>
        <img src="./images/Ryan_and_Luke.jpg" alt="" className="item-image" />
      </div>

      <div className="card-item item-2">
          <div className="description">
            <p>Rice takes over OCF!</p>
          </div>
        <img src="./images/Band_and_Crowd.jpg" alt="" className="item-image" />
      </div>

      <div className="card-item item-3"  onMouseEnter={() => document.querySelector(".item-image").classList.add('item-image-test')}>
        <div className="description">
          <p>Grant takes the stage</p>
        </div>
        <img src="./images/Grant.jpg" alt="" className="item-image"/>
      </div>

      <div className="card-item item-4">
          <div className="description">
            <p>Ryan takes the stage</p>
          </div>
        <img src="./images/Ryan.jpg" alt="" className="item-image" />
      </div>

      <div className="card-item item-5">
        <div className="description">
            <p>Carson takes the stage</p>
          </div>
        <img src="./images/Carson.jpg" alt="" className="item-image" />
      </div>
    </div>
  )
}

export default InstagramCards
