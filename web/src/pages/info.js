import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

export const query = graphql`
  query InfoPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)info/" }) {
      id
      title
    }
  }
`

const InfoPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page
  const personNodes =
    data && data.people && mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs)

  if (!page) {
    throw new Error(
      'Missing "Info" page data. Open the studio at http://localhost:3333 and add "Info" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <h1 className="about-quote">
          <br></br>
          <br></br>
          EXHIBITIONS  <br></br>
          <br></br>
          Winter Exhibition, 155a Gallery, Dulwich
          <br></br>
          <span className="about-blurb">7th Dec 2020 — 23rd Jan 2021</span>
          <br></br>
          <br></br>
          Small is Beautiful, Flowers Gallery, Cork Street, London
          <br></br>
          <span className="about-blurb">Dec 2020 — Jan 2021</span>
          <br></br>
          <br></br>
          Sophie Breitmeyer,The Art Registry
          <br></br>
          <span className="about-blurb">Summer — Autumn 2020</span>
          <br></br>
          <br></br>
          Our Home, The Table Hay, Hay-On-Wye, Wales
          <br></br>
          <span className="about-blurb">16th — 31st May 2020</span>
          <br></br>
          <br></br>
          Places Dreamed/Real, Studio E Gallery, Seattle
          <br></br>
          <span className="about-blurb">Jan — Feb 2020</span>
          <br></br>
          <br></br>
          Present Day, Candida Stevens, Chichester, West Sussex
          <br></br>
          <span className="about-blurb">Dec 2019</span>
          <br></br>
          <br></br>
          Paris Fashion Week Collaboration with UNIFORME
          <br></br>
          <span className="about-blurb">June 2019</span>
          <br></br>
          <br></br>
          Absence / Presence, Galerie La Boucherie, Brittany, France
          <br></br>
          <span className="about-blurb">July 2018</span>
          <br></br>
          <br></br>
          Liberty, London
          <br></br>
          <span className="about-blurb">2017</span>
          <br></br>
          <br></br>
          Paul Smith, Mayfair
          <br></br>
          <span className="about-blurb">2017</span>
          <br></br>
          <br></br>
          Elsewhere, Solo show Conduit Gallery, Dallas Texas
          <br></br>
          <span className="about-blurb">2017</span>
          <br></br>
          <br></br>
          Vanishing Point, James Freeman Gallery, London
          <br></br>
          <span className="about-blurb">2016</span>
          <br></br>
          <br></br>
          The Silk, James Freeman Gallery, London
          <br></br>
          <span className="about-blurb">2016</span>
          <br></br>
          <br></br>
          Into the Night, Solo Show, James Freeman Gallery, London
          <br></br>
          <span className="about-blurb">2015</span>
          <br></br>
          <br></br>
          40 Contemporary British Painters, The Crypt Gallery, London
          <br></br>
          <span className="about-blurb">2014</span>
          <br></br>
          <br></br>
          The Winter Garden, James Freeman Gallery, London
          <br></br>
          <span className="about-blurb">2014</span>
          <br></br>
          <br></br>
          The Last Man, James Freeman Gallery, London
          <br></br>
          <span className="about-blurb">2014</span>
          <br></br>
          <br></br>
          Parcours d'Artistes, Saint-Gilles Culture, Brussels
          <br></br>
          <span className="about-blurb">2014</span>
          <br></br>
          <br></br>
          Wimbledon MA Drawing Interim Show, The National Gallery, London
          <br></br>
          <span className="about-blurb">2012</span>
          <br></br>
          <br></br>
          <br></br>
          RESIDENCIES  <br></br>
          <br></br>
          Residency 108, Germantown, Upstate New York
          <br></br>
          <span className="about-blurb">Autumn 2018</span>
          <br></br>
          <br></br>
          <br></br>
          EDUCATION  <br></br>
          <br></br>
          MA Drawing UAL, Wimbledon College of Art, London
          <br></br>
          <span className="about-blurb">Autumn 2012</span>
          <br></br>
          <br></br>
          BA Drawing UAL, Camberwell College of Art, London
          <br></br>
          <span className="about-blurb">Autumn 2010</span>
          <br></br>
          <br></br>
          Fine Art Foundation UAL, Byam Shaw School, Central Saints Martins, London
          <br></br>
          <span className="about-blurb">Autumn 2007</span>
          <br></br>
          <br></br> 
        </h1>
        <h1 className="about-blurb">
          <br></br>
          <br></br>Christopher Gee is a British artist born in Portsmouth, England in 1987. He lives
          and works on the Thames Estuary, Essex. His small scale works on paper explore stillness
          and isolated scenes. His paintings are informed by historic houses and landmarks, often
          forgotten or overlooked sites of familiarity and intrigue. Walking and collecting are key
          to his practice.
          <br></br>
          <br></br>
          His graphic yet naïve-looking paintings, conjure places both historical and imagined,
          taking us on a fragmented journey through forested landscapes, vernacular architecture,
          and archaic towers. The intimacy and execution of these paintings convey themes of silence
          and solitude.
          <br></br>
          <br></br>
          His influences include Northern Renaissance painting, Folk Art, the Romantic landscapes of
          Caspar David Friedrich and the paintings of Alfred Wallis. He also takes inspiration from
          the novels of Hermann Hesse and W.G. Sebald.
          <br></br>
          <br></br>
          Gee has sold his work to clients such as Paul Smith and Liberty London as well as showing
          at Paris fashion week in 2019 in collaboration with menswear brand UNIFORME-Paris. His
          work is also held in private collections around the world.
          <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> 
        </h1>
      </Container>
    </Layout>
  )
}

export default InfoPage
