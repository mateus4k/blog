import styled from "styled-components"
import { Link as link } from "gatsby"

export const Container = styled.section`
  display: flex;
  background: #192734;
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
`

export const Link = styled(link)`
  display: flex;
  align-items: center;
  padding: 3rem;
  width: 50%;
  background: #192734;
  text-decoration: none;
  color: #1fa1f2;
  transition: background 0.5s;

  &:hover {
    background: #38444d;
  }

  &.previous {
    border-right: 1px solid #38444d;
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
