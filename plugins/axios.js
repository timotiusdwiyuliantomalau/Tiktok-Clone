import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "https://tiktok-clone-api-sigma.vercel.app";

  return {
    provide: {
      axios: axios,
    },
  };
});
