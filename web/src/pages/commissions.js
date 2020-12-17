import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import CommissionPreviewGrid from '../components/commission-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query CommissionPageQuery {
    commissions: allSanityCommission(limit: 50, sort: { fields: [publishedAt], order: DESC }) {
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

          slug {
            current
          }
        }
      }
    }
  }
`

const CommissionsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const commissionsNodes =
    data && data.commissions && mapEdgesToNodes(data.commissions).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title="Commissions" />
      <Container>
        {commissionsNodes && commissionsNodes.length > 0 && (
          <CommissionPreviewGrid nodes={commissionsNodes} />
        )}
      </Container>
    </Layout>
  )
}

export default CommissionsPage
