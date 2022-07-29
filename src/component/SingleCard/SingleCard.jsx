import React from "react"
import './SingleCard.css'

export default function SingleCard({imageOne}){
    return(
        <div className="SingleCard">
            <img src={imageOne} alt="Sign" className="SingleImage" />
        </div>
    )
}