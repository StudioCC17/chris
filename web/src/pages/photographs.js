import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import PhotographPreviewGrid from '../components/photograph-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query PhotographsPageQuery {
    photographs: allSanityPhotograph(limit: 50, sort: { fields: [publishedAt], order: ASC }) {
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

const PhotographsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const photographsNodes =
    data && data.photographs && mapEdgesToNodes(data.photographs).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title="Photographs" />
      <Container>
        {photographsNodes && photographsNodes.length > 0 && (
          <PhotographPreviewGrid nodes={photographsNodes} />
        )}
      </Container>
    </Layout>
  )
}

export default PhotographsPage
