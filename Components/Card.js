import React from 'react'

 const Card = ({key, image, title, rating, showDetails, cardId}) => {
  return (
    <div className="card--frame"   key={key} id={cardId} onClick={showDetails}>
       
    <img className="card--image"
        id={cardId}
        src={image} 
        alt={title} 
        width="170" 
        height="250"/> <br></br>
     <span className="card--rating" key={key} id={cardId}>   
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" 
             className="card--star" 
             id={cardId}/>
           {rating} {title}</span>
        
        </div>
  )
}

export default Card