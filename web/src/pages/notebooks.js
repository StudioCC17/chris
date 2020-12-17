import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import NotebookPreviewGrid from '../components/notebook-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { responsiveTitle1 } from '../components/typography.module.css'

export const query = graphql`
  query NotebooksPageQuery {
    notebooks: allSanityNotebook(limit: 50, sort: { fields: [publishedAt], order: DESC }) {
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

const NotebooksPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const notebooksNodes =
    data && data.notebooks && mapEdgesToNodes(data.notebooks).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title="Notebooks" />
      <Container>
        {notebooksNodes && notebooksNodes.length > 0 && (
          <NotebookPreviewGrid nodes={notebooksNodes} />
        )}
      </Container>
    </Layout>
  )
}

export default NotebooksPage
