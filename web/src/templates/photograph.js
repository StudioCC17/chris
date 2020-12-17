import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Photograph from '../components/photograph'
import SEO from '../components/seo'
import LayoutPhotograph from '../containers/layoutPhotograph'

export const query = graphql`
  query PhotographTemplateQuery($id: String!) {
    photograph: sanityPhotograph(id: { eq: $id }) {
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
      slug {
        current
      }
    }
  }
`

const PhotographTemplate = props => {
  const { data, errors } = props
  const photograph = data && data.photograph
  return (
    <LayoutPhotograph>
      {errors && <SEO title="GraphQL Error" />}
      {photograph && <SEO title={photograph.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {photograph && <Photograph {...photograph} />}
    </LayoutPhotograph>
  )
}

export default PhotographTemplate
