import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Profile = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, position, description },
      },
    }) => (
      <div className="container">
        <h1>{title}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
      </div>
    )}
  />
)

export default Profile
