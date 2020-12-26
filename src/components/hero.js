import React from "react"
import "../styles/hero.css"
import Author from "../../static/icon.jpg"

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcome to my blog!
        <br />
        Enjoy lots of posts. <br />
      </h1>
      <div className="hero-author">
        <img src={Author} className="hero-author-image" alt="avatar"></img>
        <p className="hero-author-text">
          Written by XXXX. <br />
          Front Engineer at Hoge.Inc Love JavaScript.
        </p>
      </div>
    </div>
  )
}
