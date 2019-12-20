import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Image } from "./styles"

const Avatar = () => {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Image fluid={avatar.childImageSharp.fluid} />
}

export default Avatar
