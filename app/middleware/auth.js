export default function({ store, redirect }) {
  if (!store.state.user.authToken) {
    return redirect('/')
  }
}
