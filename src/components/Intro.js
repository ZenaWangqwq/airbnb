import React from "react"

export default function Intro() {
    return (
        <section className="Intro">
            <img src = {process.env.PUBLIC_URL + '/images/photo-grid.png'} className="photo"/>
            <h1 className="intro-title">Online Experiences</h1>
            <p className="intro-content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}