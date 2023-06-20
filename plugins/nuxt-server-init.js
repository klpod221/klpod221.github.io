export default async (context) => {
  await context.store.dispatch('nuxtServerInit', context);
};
