import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  text-align: center;
  width: 20rem;
  height: 100vh;
  padding: 2rem;
  background: var(--mediumBackground);
  border-right: 1px solid var(--borders);

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`
