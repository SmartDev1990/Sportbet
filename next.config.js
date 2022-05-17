module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/featured',
          permanent: true,
        },
      ]
    },
}
