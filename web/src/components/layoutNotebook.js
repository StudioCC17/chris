import React from 'react'
import { Link } from 'gatsby'
import '../styles/layout.css'
import styles from './layout.module.css'

const LayoutNotebook = ({ children }) => (
  <>
    <div>
      <Link to="/notebooks/">
        <p className="close">X</p>
      </Link>
    </div>
    <div className={styles.content}>{children}</div>
  </>
)

export default LayoutNotebook
