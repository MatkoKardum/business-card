import React from "react"
import twitterIcon from "../assets/twitter-icon.png"
import githubIcon from "../assets/github-icon.png"
import facebookIcon from "../assets/facebook-icon.png"
import instagramIcon from "../assets/instagram-icon.png"

export default function Footer() {
    return (
        <footer>
            <img src={twitterIcon} />
            <img src={facebookIcon} />
            <img src={instagramIcon} />
            <img src={githubIcon} />
        </footer>
    )
} 