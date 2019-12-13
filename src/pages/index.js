import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="#7159c1"
      category="Js"
      date="13 de Dezembro de 2019"
      timeToRead="5"
      title="Desvendando Redux e Redux Saga no React"
      description="Aprenda o utilizar a mais famosa biblioteca de gerenciamento de estados do melhor framework frontend do mundo!"
    />
  </Layout>
)

export default IndexPage
