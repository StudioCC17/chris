import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Painting from '../components/painting'
import SEO from '../components/seo'
import LayoutPainting from '../components/layoutPainting'

export const query = graphql`
  query PaintingTemplateQuery($id: String!) {
    painting: sanityPainting(id: { eq: $id }) {
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
      width
      height
      slug {
        current
      }
    }
  }
`

const PaintingTemplate = props => {
  const { data, errors } = props
  const painting = data && data.painting
  return (
    <LayoutPainting>
      {errors && <SEO title="GraphQL Error" />}
      {painting && <SEO title={painting.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {painting && <Painting {...painting} />}
    </LayoutPainting>
  )
}

export default PaintingTemplate
