import React from "react"

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
    return (
        <div className="card">
          {badgeText && <div className="badge">{badgeText}</div>}
          <img src={process.env.PUBLIC_URL+`/images/${props.coverImg}`} className="pic"/>
          <div className="review">
            <img src={process.env.PUBLIC_URL + '/images/star.png'} className = "star"></img>
            <span className="rating">{props.stats.rating}</span>
            <span className="review-count-country">({props.stats.reviewCount})·{props.location}</span>
          </div>
          <h3 className="title">{props.title}</h3>
          <p className="price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}