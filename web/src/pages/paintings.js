import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import PaintingPreviewGrid from '../components/painting-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query PaintingsPageQuery {
    paintings: allSanityPainting(limit: 50, sort: { fields: [publishedAt], order: ASC }) {
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

const PaintingsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const paintingNodes =
    data && data.paintings && mapEdgesToNodes(data.paintings).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title="Paintings" />
      <Container>
        {paintingNodes && paintingNodes.length > 0 && <PaintingPreviewGrid nodes={paintingNodes} />}
      </Container>
    </Layout>
  )
}

export default PaintingsPage
