import React from "react";
import SingleCard from "../../component/SingleCard"
import './CardsTemplate.css'

export default function CardsTemplate(){
    const image = 
        {
            imageUrl: "https://capricho.abril.com.br/wp-content/plugins/abril-plugins/abril-horoscopo/templates/includes/images/signos/signo-aries.png"
        }
    
    return(
        <div className="CardsTemplate">
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
            <SingleCard imageOne={image.imageUrl}/>
        </div>
    )

}