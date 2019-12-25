import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  height: 100vh;
  width: 3.75rem;
  padding: 0.8rem 0;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  transition: background 0.5s;

  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
  `}
`

export const Link = styled(AniLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const Item = styled.span`
  display: block;
  color: var(--texts);
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.1rem;
  position: relative;
  cursor: pointer;
  transition: ease 0.5s;

  &:hover {
    color: var(--highlight);
  }

  &.light {
    color: #d4d400;
    transition: ease 0.3s;
    &:hover {
      color: #e2e240;
    }
  }

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}

  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`
