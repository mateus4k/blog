import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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
    {!isFirst && <Link to={prevPage}>← página anterior</Link>}

    {numPages > 1 && (
      <p>
        {currentPage} de {numPages}
      </p>
    )}

    {!isLast && <Link to={nextPage}>proxima página →</Link>}
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
