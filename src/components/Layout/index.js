import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import { Container, Main } from "./styles"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => (
  <Container>
    <GlobalStyles />
    <TransitionPortal level="top">
      <Sidebar />
    </TransitionPortal>
    <Main>{children}</Main>
    <TransitionPortal level="top">
      <MenuBar />
    </TransitionPortal>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
