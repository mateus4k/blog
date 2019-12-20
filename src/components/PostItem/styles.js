import styled from "styled-components"
import media from "styled-media-query"
import { Link as link } from "gatsby"

export const Container = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--borders);
  padding: 2rem 3rem;
  width: 100%;

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}

  body#grid & {
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem;
    border: none;
  }
`

export const Link = styled(link)`
  display: flex;
  color: var(--texts);
  text-decoration: none;

  ${media.lessThan("large")`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}

  &:hover {
    color: var(--highlight);
  }

  body#grid & {
    background-color: var(--background);
  }
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  border-radius: 50%;
  font-size: 1.3rem;
  font-weight: 700;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  color: var(--texts);
  text-transform: uppercase;

  ${media.lessThan("large")`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    margin: 0;
  `}
`

export const Date = styled.time`
  font-size: 0.9rem;
`

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
`
