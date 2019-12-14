import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import {
  Header,
  Title,
  Description,
  Date,
  Content,
} from "../components/Post/styles"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Header>
        <Date>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </Date>
        <Title>{post.frontmatter.title}</Title>
        <Description>{post.frontmatter.description}</Description>
      </Header>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </Content>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`
