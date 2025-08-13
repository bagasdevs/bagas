const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // SEO and metadata optimizations
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Bagas Pamungkas - Web Developer Portfolio | PHP, Laravel, Vue.js'
        args[0].meta = {
          description: 'Bagas Cahya Pamungkas - Web Developer Portfolio. Experienced in back-end development, Vue.js, PHP, Laravel and modern web technologies.',
          keywords: 'web developer, portfolio, bagas pamungkas, back-end developer, vue.js, php, laravel, javascript',
          author: 'Bagas Cahya Pamungkas'
        }
        return args
      })
    
    // Optimize CSS loading to reduce render blocking
    if (process.env.NODE_ENV === 'production') {
      config.plugin('extract-css').tap(([options]) => [
        Object.assign(options, {
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css'
        })
      ])
    }
  },
  
  // Performance optimizations
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 5,
        maxAsyncRequests: 6,
        cacheGroups: {
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 1,
            maxSize: 244000 // ~244KB
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 0,
            chunks: 'all',
            maxSize: 244000
          }
        }
      }
    }
  },
  
  // Development server optimizations
  devServer: {
    compress: true,
    hot: true,
    open: true
  },
  
  // Production optimizations
  productionSourceMap: false,
  
  // CSS optimizations to reduce render blocking
  css: {
    extract: process.env.NODE_ENV === 'production' ? {
      ignoreOrder: true,
      // Optimize CSS extraction for faster loading
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    } : false,
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('autoprefixer'),
            ...(process.env.NODE_ENV === 'production' ? [
              require('cssnano')({
                preset: ['default', {
                  discardComments: { removeAll: true },
                  normalizeWhitespace: false,
                  mergeLonghand: false
                }]
              })
            ] : [])
          ]
        }
      }
    }
  },
  
  // Additional performance optimizations
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // Optimize chunks for better caching
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css|less|sass|scss|styl)$/,
        chunks: 'all',
        enforce: true,
        priority: 2
      }
    }
  }
})
