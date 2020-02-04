export default ({ app }) => {
  app.router.afterEach(() => {
    setTimeout(() => {
      document.getElementById('__nuxt') &&
        document.getElementById('__nuxt').removeAttribute('style')
      document.getElementById('__layout') &&
        document.getElementById('__layout').removeAttribute('style')
      document.getElementById('__content') &&
        document.getElementById('__content').removeAttribute('style')
    }, 1000)
  })
}
