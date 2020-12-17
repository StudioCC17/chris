import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Icon from './assets/dimscross.svg'
import Next from './assets/next.svg'
import Container from './container'
import styles from './project.module.css'

function Painting(props) {
  const { title, mainImage, height, width } = props
  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)

              .fit('clip')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}

      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            <h1 className={styles.title}>
              {height}
              <span className="dimscross">
                <Icon />
              </span>
              {width} cm
            </h1>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default Painting
