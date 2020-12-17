import React from 'react'
import { Link } from 'gatsby'

export default function IndexPage() {
  return (
    <Link style={{ color: 'white', textDecoration: 'none' }} to="/paintings/">
      <div
        className="splash-text"
        style={{
          width: '60%',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div>
          <p>
            <i>
              Elsewhere, in the quiet provinces the artist can easily find himself surrounded by
              melancholias. Lost in thought he sits at the secluded windows of his medieval digs, a
              strange twilight flowing all about him, and without so much as stirring he sends his
              daydreams out onto the sweeping landscape. No one comes. Nothing disturbs his reverie.
              An inexpressible silence rules the surrounds.
            </i>
          </p>
          <p style={{ fontSize: '1.3vw' }}>Robert Walsner</p>
        </div>
      </div>
    </Link>
  )
}
