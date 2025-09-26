import React from 'react'
import HsectionOne from './Sections/SectionOne/HsectionOne'
import HsectionTwo from './Sections/SectionTwo/HsectionTwo'
import Hsectionthree from './Sections/SectionThree/Hsectionthree'
import HsectionFour from './Sections/SectionsFour/HsectionFour'
import HsectionFive from './Sections/SectionFive/HsectionFive'
import HSectionSixteen from './Sections/SectionSixteen/HSectionSixteen'
import HSectionThirteen from './Sections/SectionThirteen/HSectionThirteen'

export default function HomePage() {
  return (
    <>
    {/* <HsectionOne/> */}
    <HsectionTwo/>
    <Hsectionthree/>
    <HsectionFour/>
    <HsectionFive/>

    <HSectionThirteen/>
    <HsectionFive/>{/**section Fourteen */}
    <HSectionSixteen/>
    </>
  )
}
