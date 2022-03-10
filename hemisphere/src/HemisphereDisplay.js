import React from 'react'
import northernPic from './image/NorthernHemisphere.jpg'
import southernPic from './image/SouthernHemisphere.jpg'
import './Hemisphere.css'

const hemisphereConfig = {
  Northern: { text: 'Northern', picture: northernPic },
  Southern: { text: 'Southern', picture: southernPic },
}

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? 'Northern' : 'Southern'
  const { text, picture } = hemisphereConfig[hemisphere]

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="hemosphere" />
        </div>
        <div className="ui teal bottom attached label">
          <h1>You're in the {text} hemisphere</h1>
        </div>
      </div>
    </div>
  )
}

export default HemisphereDisplay
