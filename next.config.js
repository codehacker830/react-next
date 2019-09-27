const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withImages(withCSS(
    {
        webpack(config, options) {
            return config
        },
        cssLoaderOptions: {
            url: false
        }
    }
));