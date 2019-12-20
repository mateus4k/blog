import styled from "styled-components"
import { Link as link } from "gatsby"

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
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`

export const Link = styled(link)`
  display: block;
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
`
