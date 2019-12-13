import styled from "styled-components"

export const Container = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const Group = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`

export const Item = styled.li``

export const Link = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`

export const IconContainer = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
