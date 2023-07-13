import React from 'react'
import AboutUs from './AboutUs'
import NewsAndHighlights from './NewsAndHighlight'



const Card = () => {
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <AboutUs />
            <NewsAndHighlights />
        </div>
    )
}

export default Card