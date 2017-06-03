module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html', 'dist/**/**.js', 'dist/**/**.css', 'dist/**/**.svg', 'dist/*.jpg',
    'dist/assets/img/**/*.jpg'
  ]
};
