import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { Bulb as Light } from "styled-icons/boxicons-regular/Bulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"

import { Container, Group, Link, Item } from "./styles"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <Container>
      <Group>
        <Link to="/" title="Voltar para Home">
          <Item>
            <Home />
          </Item>
        </Link>
        <Link to="/search" title="Pesquisar">
          <Item>
            <Search />
          </Item>
        </Link>
      </Group>
      <Group>
        <Item
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <Light />
        </Item>
        <Item title="Mudar visualização">
          <Grid />
        </Item>
        <Item title="Ir para o topo">
          <Arrow />
        </Item>
      </Group>
    </Container>
  )
}

export default MenuBar
