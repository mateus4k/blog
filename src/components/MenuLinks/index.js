import React from "react"

import links from "./links"

import { Container, List, Item, Link } from "./styles"

const MenuLinks = () => (
  <Container>
    <List>
      {links.map((link, index) => (
        <Item key={index}>
          <Link to={link.url} activeStyle={{ color: "#1fa1f2" }}>
            {link.label}
          </Link>
        </Item>
      ))}
    </List>
  </Container>
)

export default MenuLinks
