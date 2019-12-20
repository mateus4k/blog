import styled from "styled-components"
import media from "styled-media-query"
import { Link as link } from "gatsby"

export const Container = styled.nav`
  ${media.lessThan("large")`
    display: none;
  `}
`

export const List = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const Item = styled.li`
  padding: 0.5rem 0;
`

export const Link = styled(link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`
