import React from 'react'
import "./Browse.css"

const Browse = () => {
  return (
    <div className='browse'>
        <div className="browse-heading">
            <h1>Browse The Range</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
        <div className="browse-collection">
            <div className="dinning">
                <img src="../image1.png" alt="" />
                <br />
                <h1>Dining</h1>

            </div>
            <div className="living">
            <img src="../Image2.png" alt="" />
            <h1>Living</h1>
            </div>
            <div className="bedroom">
            <img src="../image3.png" alt="" />
            <h1>Bedroom</h1>
            </div>
        </div>
    </div>
  )
}

export default Browse