import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--background);
  width: 100%;
  transition: opacity 0.4s;

  ${media.lessThan("large")`
    padding: 0.5rem 1rem;
  `}

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  .ais-SearchBox {
    padding-top: 6rem;

    ${media.lessThan("large")`
      padding-top: 1rem;
    `}
  }
  .ais-Stats {
    color: var(--texts);
  }
  body#grid & {
    .ais-Hits-list {
      display: grid;
      grid-area: card;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      background-color: var(--borders);
      border-bottom: 1px solid var(--borders);
      border-top: 1px solid var(--borders);
      margin-top: 2rem;
    }
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--borders);
    color: var(--texts);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: var(--texts);
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
