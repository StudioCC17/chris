import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BookPreviewGrid from '../components/book-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query BookPageQuery {
    books: allSanityBook(limit: 50, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          description
          price
          height
          width
          pages
          copies
          isbn
          slug {
            current
          }
        }
      }
    }
  }
`

const BooksPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const booksNodes =
    data && data.books && mapEdgesToNodes(data.books).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title="Books" />
      <Container>
        {booksNodes && booksNodes.length > 0 && <BookPreviewGrid nodes={booksNodes} />}
      </Container>
    </Layout>
  )
}

export default BooksPage
