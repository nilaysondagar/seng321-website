import rfpLink from '../assets/files/rfp.pdf';
import snowplowImage from '../assets/images/rfps/snowplowImage.jpg';
import rd11Link from '../assets/files/rd11.pdf';
import rd11Image from '../assets/images/rfps/rd1-1Image.png';
import rsd11Link from '../assets/files/rsd11.pdf';
import rsd11Image from '../assets/images/rfps/rsd1-1Image.jpg';

export const RFPS = [
  {
    image: snowplowImage,
    title: 'Snow and Ice Control RFP',
    tagline: 'A snowplow optimization plan',
    description: 'The objective of the project is to create a program that will monitor the roads based on weather reports, the amount of snowfall in an area, and the recent plowing of snow that has happened. Using this data, we can plan the snow plow routes better, as well as better inform citizens of road conditions.',
    link: rfpLink
  },
  {
    image: rd11Image,
    title: 'Snow and Ice Control RD1.1',
    tagline: 'A response to our designer\'s RD1.0',
    description: 'This document shows our concerns and comments relating to the requirements and project scope detailed in the initial Requirements Document. Annotations can be viewed using a PDF viewer such as Preview or Adobe Acrobat.',
    link: rd11Link
  },
  {
    image: rsd11Image,
    title: 'Snow and Ice Control RSD1.1',
    tagline: 'A response to our designer\'s RSD1.0',
    description: 'This document shows our concerns and comments relating to the requirements, project scope and use cases detailed in the initial Requirements Specification Document. Annotations can be viewed using a PDF viewer such as Preview or Adobe Acrobat.',
    link: rsd11Link
  }
];