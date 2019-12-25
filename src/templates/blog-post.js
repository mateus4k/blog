import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

import {
  Header,
  Title,
  Description,
  Date,
  Content,
} from "../components/Post/styles"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
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
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
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
        image
      }
      fields {
        slug
      }
      html
      timeToRead
    }
  }
`
