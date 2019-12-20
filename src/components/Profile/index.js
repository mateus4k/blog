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
      <Link to="/">
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
