import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/popular/Popular'
import Offers from '../component/offers/Offers'
import Reviews from '../component/Reviews'
import Stories from '../component/Stories'
import NewCollections from '../component/newCollections/NewCollections'
import NewsLetter from '../component/newsLetter/NewsLetter'

export default function Shop() {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />

        <Reviews />
        <Stories />
        <NewsLetter />
    </div>
  )
}
