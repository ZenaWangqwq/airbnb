import React from "react"

export default function Card({img, rating, reviewCount, country, title, price}) {
    return (
        <div className="card">
          <img src={process.env.PUBLIC_URL+`/images/${img}`} className="pic"/>
          <div className="review">
            <img src={process.env.PUBLIC_URL + '/images/star.png'} className = "star"></img>
            <span className="rating">{rating}</span>
            <span className="review-count-country">({reviewCount})·{country}</span>
          </div>
          <h3 className="title">{title}</h3>
          <p className="price"><b>From ${price}</b> / person</p>
        </div>
    )
}