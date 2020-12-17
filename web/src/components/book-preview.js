import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import styles from './project-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function BookPreview(props) {
  const { title, mainImage, pages, copies, height, width, description, price } = props
  return (
    <Link className={styles.root} to={`/book/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .height(600)
              .fit('clip')
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h1 className={styles.title}>{title}</h1>
      <h1 className={styles.title}>
        £{price},{' '}
        <span style={{ color: 'grey' }}>
          <i>Buy Now</i>
        </span>
      </h1>
    </Link>
  )
}

export default BookPreview
