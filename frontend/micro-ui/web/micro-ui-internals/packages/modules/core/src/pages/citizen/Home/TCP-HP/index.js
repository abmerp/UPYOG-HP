import React from "react"
import GovtStrip from "./GovtStrip"
import ImageSlider from "./ImageSlider"
import images from "./images"
import Strip from "./Strip"
import NewsTicker from "./NewsTicker"
import Card from "./Cards/Card"
import AuthAndServices from "./AuthAndServices"
import Facilation from "./Facilation"


const TcpHome = () => {
    return(
        <React.Fragment>
          <Strip />
          <GovtStrip />
          <ImageSlider images={images}/>
          <NewsTicker />
          <Card />
          <AuthAndServices />
          <Facilation />
        </React.Fragment>
    )
}

export default TcpHome