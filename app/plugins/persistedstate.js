export default async context => {
  await context.store.dispatch('persistedstate', context)
}
