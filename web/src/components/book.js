import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Icon from './assets/dimscross.svg'
import Next from './assets/next.svg'
import Container from './container'

import styles from './book.module.css'

function Book(props) {
  const { title, mainImage, pages, copies, height, width, description, price } = props
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
        <h1 className="book-title">
          {title}, £{price}
          <br></br>
          <i>Buy Now</i>
        </h1>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>
              {pages} pages, {height}
              <span className="dimscross">
                <Icon />
              </span>
              {width}mm, {copies} copies
            </h1>
            <h1 className={styles.title}>{description} </h1>
          </div>
        </div>
        <h1 className="prices">1 of 3</h1>
      </Container>
    </article>
  )
}

export default Book
