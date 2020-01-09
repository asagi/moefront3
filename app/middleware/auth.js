export default function({ store, redirect }) {
  setTimeout(() => {
    if (!store.getters['user/getAuthToken']) {
      return redirect('/')
    }
  }, 0)
}
