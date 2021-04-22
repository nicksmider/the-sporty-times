module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/the-sporty-times/'
    : '/',
  transpileDependencies: ['vuex-persist'],
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'The Sporty Times'
      return args
    })
  }
};
