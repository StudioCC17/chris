import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Notebook from '../components/notebook'
import SEO from '../components/seo'
import LayoutNotebook from '../containers/layoutNotebook'

export const query = graphql`
  query NotebookTemplateQuery($id: String!) {
    notebook: sanityNotebook(id: { eq: $id }) {
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

const NotebookTemplate = props => {
  const { data, errors } = props
  const notebook = data && data.notebook
  return (
    <LayoutNotebook>
      {errors && <SEO title="GraphQL Error" />}
      {notebook && <SEO title={notebook.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {notebook && <Notebook {...notebook} />}
    </LayoutNotebook>
  )
}

export default NotebookTemplate
