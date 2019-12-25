import React from "react"

import links from "./links"
import getThemeColor from "../../utils/getThemeColor"

import { Container, List, Item, Link } from "./styles"

const MenuLinks = () => (
  <Container>
    <List>
      {links.map((link, index) => (
        <Item key={index}>
          <Link
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
            activeStyle={{ color: "var(--highlight)" }}
            to={link.url}
          >
            {link.label}
          </Link>
        </Item>
      ))}
    </List>
  </Container>
)

export default MenuLinks
