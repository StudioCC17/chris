import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Book from '../components/book'
import SEO from '../components/seo'
import LayoutBook from '../containers/layoutBook'

export const query = graphql`
  query BookTemplateQuery($id: String!) {
    book: sanityBook(id: { eq: $id }) {
      id
      publishedAt
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
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
`

const BookTemplate = props => {
  const { data, errors } = props
  const book = data && data.book
  return (
    <LayoutBook>
      {errors && <SEO title="GraphQL Error" />}
      {book && <SEO title={book.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {book && <Book {...book} />}
    </LayoutBook>
  )
}

export default BookTemplate
