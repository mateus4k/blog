import styled from "styled-components"

export const Container = styled.section`
  body#grid & {
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    background-color: var(--borders);
    border-bottom: 1px solid var(--borders);
  }
`
