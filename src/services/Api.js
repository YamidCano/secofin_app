import axios from "axios"
import { useAppStore } from 'stores/app';
import { Notify } from 'quasar'

export const urlBase = "http://127.0.0.1:8000/api";
// export const urlBase = "https://api.miravento.com.co/api";

const showErrorAlert = () => {

  Notify.create({
    message: 'Hubo un problema al obtener el token. Por favor, vuelva a iniciar sesión para continuar',
    type: 'negative',
    position: 'top-right',
    badgeColor: 'yellow',
    badgeTextColor: 'dark',
    badgeClass: 'shadow-3 glossy my-badge-class',
    multiLine: true,
    timeout: 0,
    actions: [
      {
        label: 'Iniciar sesión', color: 'white', handler: () => {
          localStorage.removeItem("miravento");
          window.location.href = "/";
        }
      },
    ]
  });
};

const App = () => {
  const { token } = useAppStore();

  const api = axios.create({
    baseURL: urlBase,
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
    },
    timeout: 30000
  });

  // error
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        showErrorAlert();
      }
      return Promise.reject(error);
    }
  );
  return api;
};

export default App;
