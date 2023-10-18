/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push({
      test: /\.ejs\.html/,
      loader: 'html-loader'
    })
    return config
  },
}
