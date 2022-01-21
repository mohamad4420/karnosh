module.exports = {
  reactStrictMode: true,
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  images: {
    domains: ['karnosh.s3.eu-central-1.amazonaws.com','i0.wp.com','i2.wp.com','i1.wp.com','i.ytimg.com']
}
}
