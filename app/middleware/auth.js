export default function({ store, redirect }) {
  if (!store.getters['user/getAuthToken']) {
    return redirect('/')
  }
}
