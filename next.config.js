/** @type {import('next').NextConfig} */


const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        url: 'http://localhost:5000',
      },
      images: {
        domains: ['karnosh.s3.eu-central-1.amazonaws.com','ww.mycima.ink','i0.wp.com','i2.wp.com','i1.wp.com','i.ytimg.com','mycima.ink','www.dunebook.com']
    }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      url: 'http://localhost:5000',
    },
    images: {
      domains: ['karnosh.s3.eu-central-1.amazonaws.com','ww.mycima.ink','i0.wp.com','i2.wp.com','i1.wp.com','i.ytimg.com','mycima.ink','www.dunebook.com']
  }  }
 
}



