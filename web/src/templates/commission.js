import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Commission from '../components/commission'
import SEO from '../components/seo'
import LayoutCommission from '../containers/layoutCommission'

export const query = graphql`
  query CommissionTemplateQuery($id: String!) {
    commission: sanityCommission(id: { eq: $id }) {
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
      height
      width
      slug {
        current
      }
    }
  }
`

const CommissionTemplate = props => {
  const { data, errors } = props
  const commission = data && data.commission
  return (
    <LayoutCommission>
      {errors && <SEO title="GraphQL Error" />}
      {commission && <SEO title={commission.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {commission && <Commission {...commission} />}
    </LayoutCommission>
  )
}

export default CommissionTemplate
