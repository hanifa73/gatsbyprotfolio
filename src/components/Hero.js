import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query=graphql`
    {
      file(relativePath: {eq: "hero1-img.png"}) {
        childImageSharp {
          fluid {
             ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
const Hero = () => {
  const {file:{childImageSharp: {
      fluid},},}=useStaticQuery(query)
  return <header className="hero">
    <div className=" section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h2>Hi</h2><h3> I'am Hanifa </h3>
          <h4>freelance web and UX\UI desginer</h4>
          <Link to="/contact" className="btn">contact me</Link>
          <SocialLinks/>
        </div>

      </article>
<Image fluid={fluid} className="hero-img" />
    </div>
    
  </header>
}

export default Hero
