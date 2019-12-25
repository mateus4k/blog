import React from "react"
import PropTypes from "prop-types"
import { AniLink as Link } from "gatsby-plugin-transition-link/AniLink"

import getThemeColor from "../../utils/getThemeColor"
import { Container } from "./styles"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <Container>
    {!isFirst && (
      <Link
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
        to={prevPage}
      >
        ← página anterior
      </Link>
    )}

    {numPages > 1 && (
      <p>
        {currentPage} de {numPages}
      </p>
    )}

    {!isLast && (
      <Link
        cover
        direction="right"
        bg={getThemeColor()}
        duration={0.6}
        to={nextPage}
      >
        proxima página →
      </Link>
    )}
  </Container>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
