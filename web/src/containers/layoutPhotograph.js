import { graphql, StaticQuery } from 'gatsby'
import React, { useState } from 'react'
import LayoutPhotograph from '../components/layoutPhotograph'

const query = graphql`
  query siteTitleQueryAndSiteTitleQueryAndSiteTitleQueryAndSiteTitleQueryAndSiteTitleQueryAndSiteTitleQueryAndSiteTitleQueryAndSiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false)
  function handleShowNav() {
    setShowNav(true)
  }
  function handleHideNav() {
    setShowNav(false)
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }
        return (
          <LayoutPhotograph
            {...props}
            showNav={showNav}
            siteTitle={data.site.title}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        )
      }}
    />
  )
}

export default LayoutContainer