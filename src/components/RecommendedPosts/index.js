import React from "react"
import PropTypes from "prop-types"

import { Container, Link } from "./styles"

const RecommendedPosts = ({ previous, next }) => (
  <Container>
    {!!previous && (
      <Link to={previous.fields.slug} className="previous">
        {previous.frontmatter.title}
      </Link>
    )}

    {!!next && (
      <Link to={next.fields.slug} className="next">
        {next.frontmatter.title}
      </Link>
    )}
  </Container>
)

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
