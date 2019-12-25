import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Container = styled.section`
  display: flex;
  background: var(--mediumBackground);
  border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
`

export const Link = styled(AniLink)`
  display: flex;
  align-items: center;
  padding: 3rem;
  width: 50%;
  background: var(--mediumBackground);
  text-decoration: none;
  color: var(--highlight);
  transition: background 0.5s;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: var(--borders);
  }

  &.previous {
    border-right: 1px solid var(--borders);
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
