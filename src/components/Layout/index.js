import React from "react"
import PropTypes from "prop-types"

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import { Container, Main } from "./styles"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => (
  <Container>
    <GlobalStyles />
    <aside>
      <Sidebar />
    </aside>
    <Main>{children}</Main>
    <MenuBar />
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
