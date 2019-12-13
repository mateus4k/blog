import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

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
      <Link>
        <Avatar />
        <Author>{title}</Author>
        <Position>{position}</Position>
        <Description>{description}</Description>
      </Link>
    </Container>
  )
}

export default Profile
