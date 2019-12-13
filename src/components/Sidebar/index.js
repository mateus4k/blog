import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import { Container } from "./styles"

const Sidebar = () => (
  <Container>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </Container>
)

export default Sidebar
