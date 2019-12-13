import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Avatar = () => {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Image fixed={avatar.childImageSharp.fixed} />
}

export default Avatar
