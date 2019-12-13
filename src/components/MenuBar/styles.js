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
  background: "#192734";
  border-left: 1px solid #38444d;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`

export const Link = styled(link)`
  display: block;

  &:visited {
    border: 1px solid red;
  }
`

export const Item = styled.span`
  display: block;
  color: "#8899a6";
  height: 3.75rem;
  width: 3.75rem;
  padding: 1.1rem;
  position: relative;
  cursor: pointer;
`