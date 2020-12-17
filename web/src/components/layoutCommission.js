import React from 'react'
import { Link } from 'gatsby'
import '../styles/layout.css'
import styles from './layout.module.css'

const LayoutCommission = ({ children }) => (
  <>
    <div>
      <Link to="/commissions/">
        <p className="close">X</p>
      </Link>
    </div>
    <div className={styles.content}>{children}</div>
  </>
)

export default LayoutCommission
