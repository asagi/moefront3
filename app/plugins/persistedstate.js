export default async context => {
  await context.store.dispatch('user/persistedstate', context)
}
