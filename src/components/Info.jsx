import React from "react"
import personImg from "../assets/person.png"
import emailIcon from "../assets/email-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"

export default function Info() {
    return (
        <>
            <img src={personImg} className="person--img" />
            <h1 className="person--name">Laura Smith</h1>
            <h3 className="person--job">Frontend Developer</h3>
            <h4 className="person--website">laurasmith.website</h4>
            <div className="buttons">
                <a href="#" className="email--link">
                    <button className="email--btn btn">
                        <img src={emailIcon} className="email--icon" />
                        <p>Email</p> 
                    </button>
                </a>
                <a href="#" className="email--link">
                    <button className="linkedin--btn btn">
                        <img src={linkedinIcon} className="email--icon" />
                        <p>LinkedIn</p> 
                    </button>
                </a>
            </div>
        </>
    )
} 