import React from "react"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Card from "./components/Card"
import cardData from "./data"
console.log(cardData)
export default function App() {
    const cardElements = cardData.map(card=>{
                                        return (<Card 
                                            key={card.id}
                                            img={card.coverImg}
                                            rating={card.stats.rating}
                                            reviewCount={card.stats.reviewCount}
                                            country={card.location}
                                            title={card.title}
                                            price={card.price}
                                        />)})
    return (
        <div>
            <Navbar />
            <Intro />
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
    )
}