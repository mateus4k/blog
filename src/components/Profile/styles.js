import styled from "styled-components"
import { Link as link } from "gatsby"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #8899a6;
`

export const Link = styled(link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`

export const Author = styled.h1`
  font-size: 1.6rem;
  margin-top: 0.5rem;
`

export const Position = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`
