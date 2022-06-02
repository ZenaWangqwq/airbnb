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
                                            {...card}
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