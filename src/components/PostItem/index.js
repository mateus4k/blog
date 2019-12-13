import React from "react"

import { Container, Link, Tag, Info, Date, Title, Description } from "./styles"

const PostItem = () => (
  <Link to="/slug">
    <Container>
      <Tag background="#f0db4f">Js</Tag>
      <Info>
        <Date>13 de Dezembro de 2019 • 4 min de leitura</Date>
        <Title>Desvendando o Redux e Redux Saga no React</Title>
        <Description>
          Neste post você aprenderá a como utilizar o mais famoso gerenciador de
          estados no maior framework web do mundo!
        </Description>
      </Info>
    </Container>
  </Link>
)

export default PostItem
