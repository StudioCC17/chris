const { format } = require('date-fns')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node
    const dateSegment = format(publishedAt, 'YYYY/MM')
    const path = `/blog/${dateSegment}/${slug.current}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id }
    })
  })
}

async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.allSanityProject || {}).edges || []

  projectEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/project/${slug}/`

    reporter.info(`Creating project page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id }
    })
  })
}

async function createPaintingPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPainting(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const paintingEdges = (result.data.allSanityPainting || {}).edges || []

  paintingEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/painting/${slug}/`

    reporter.info(`Creating painting page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/painting.js'),
      context: { id }
    })
  })
}

async function createPhotographPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPhotograph(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const photographEdges = (result.data.allSanityPhotograph || {}).edges || []

  photographEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/photograph/${slug}/`

    reporter.info(`Creating photograph page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/photograph.js'),
      context: { id }
    })
  })
}

async function createNotebookPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityNotebook(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const notebookEdges = (result.data.allSanityNotebook || {}).edges || []

  notebookEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/notebook/${slug}/`

    reporter.info(`Creating notebook page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/notebook.js'),
      context: { id }
    })
  })
}

async function createCommissionPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityCommission(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const commissionEdges = (result.data.allSanityCommission || {}).edges || []

  commissionEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/commission/${slug}/`

    reporter.info(`Creating commission page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/commission.js'),
      context: { id }
    })
  })
}

async function createBookPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityBook(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const bookEdges = (result.data.allSanityBook || {}).edges || []

  bookEdges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.slug.current
    const path = `/book/${slug}/`

    reporter.info(`Creating book page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/book.js'),
      context: { id }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await createProjectPages(graphql, actions, reporter)

  await createPaintingPages(graphql, actions, reporter)
  await createPhotographPages(graphql, actions, reporter)
  await createNotebookPages(graphql, actions, reporter)
  await createCommissionPages(graphql, actions, reporter)
  await createBookPages(graphql, actions, reporter)
}
