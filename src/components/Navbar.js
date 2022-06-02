import { logDOM } from "@testing-library/react"
import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + '/images/airbnb-logo.png'} className="logo"/>
        </nav>
    )
}