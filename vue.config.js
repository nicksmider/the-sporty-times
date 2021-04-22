module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/the-sporty-times/'
    : '/',
  transpileDependencies: ['vuex-persist']
};
