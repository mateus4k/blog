import React from "react"

import Icons from "./Icons"
import links from "./links"

import { Container, Group, Item, Link, IconContainer } from "./styles"

const SocialLinks = () => (
  <Container>
    <Group>
      {links.map((link, id) => {
        const Icon = Icons[link.label]

        return (
          <Item key={id}>
            <Link
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContainer>
                <Icon />
              </IconContainer>
            </Link>
          </Item>
        )
      })}
    </Group>
  </Container>
)

export default SocialLinks
