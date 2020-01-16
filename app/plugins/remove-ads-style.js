export default ({ app }) => {
  app.router.afterEach(() => {
    setTimeout(() => {
      document.getElementById('__nuxt').removeAttribute('style')
      document.getElementById('__layout').removeAttribute('style')
      document.getElementById('__content').removeAttribute('style')
    }, 1)
  })
}
