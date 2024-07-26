import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {

  // Crea una instancia de Pinia
  const pinia = createPinia();

  // Usa el plugin piniaPluginPersistedstate con Pinia
  pinia.use(piniaPluginPersistedstate);


  return pinia
})
