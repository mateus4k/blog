import React from "react"
import PropTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"

import { Container, Link, Tag, Info, Date, Title, Description } from "./styles"

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <Link
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
    activeStyle={{ color: "var(--highlight)" }}
    to={slug}
  >
    <Container>
      <Tag background={background}>{category}</Tag>
      <Info>
        <Date>
          {date} • {timeToRead} min de leitura
        </Date>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
    </Container>
  </Link>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
