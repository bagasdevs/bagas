const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // SEO and metadata optimizations
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Bagas Cahya - Web Developer Portfolio | PHP, Laravel, Vue.js'
        args[0].meta = {
          description: 'Bagas Cahya Pamungkas - Web Developer Portfolio. Experienced in back-end development, Vue.js, PHP, Laravel and modern web technologies.',
          keywords: 'web developer, portfolio, bagas cahya, back-end developer, vue.js, php, laravel, javascript',
          author: 'Bagas Cahya Pamungkas'
        }
        return args
      })
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
  
  // CSS optimizations
  css: {
    extract: process.env.NODE_ENV === 'production' ? {
      ignoreOrder: true
    } : false,
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('autoprefixer')
          ]
        }
      }
    }
  }
})
