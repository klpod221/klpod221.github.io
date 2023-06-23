export default function ({ app, store, redirect, route, error }) {
  if (!store.getters.isLoggedIn) {
    return redirect('/login');
  }
}
