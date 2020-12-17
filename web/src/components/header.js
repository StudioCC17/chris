import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to="/paintings/">{siteTitle}</Link>
      </h1>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/paintings/">Paintings </Link>
          </li>
          <li>
            <Link to="/photographs/">Photographs </Link>
          </li>
          <li>
            <Link to="/notebooks/">Notebooks </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/commissions/">Commissions </Link>
          </li>
          <li>
            <Link to="/books/">Books </Link>
          </li>
          <li>
            <Link to="/info/">Info </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
