import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

import getThemeColor from "../../utils/getThemeColor"

import { Container, Link, Author, Position, Description } from "./styles"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <Container>
      <Link cover direction="left" bg={getThemeColor()} duration={0.6} to="/">
        <Avatar />
        <Author>
          {title}
          <Position>{position}</Position>
        </Author>
      </Link>
      <Description>{description}</Description>
    </Container>
  )
}

export default Profile
