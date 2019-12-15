import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import { Container, Title } from "./styles"

const Comments = ({ url, title }) => {
  const completeURL = `https://mateus4k.me${url}`

  return (
    <Container>
      <Title>Comentários</Title>
      <ReactDisqusComments
        shortname="mateus4k"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </Container>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
