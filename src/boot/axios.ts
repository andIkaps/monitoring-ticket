import { boot } from 'quasar/wrappers'
import axios, { AxiosInstance } from 'axios'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $axios: AxiosInstance
        $api: AxiosInstance
    }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' })
api.interceptors.request.use((config: any) => {
    config.headers = {
        // 'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('token')}`
    }

    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status == 401) {
            // localStorage.removeItem('token')
            // 401 Unauthorized
            // Do Something..
        } else if (error.response.status == 400) {
            // 400 Bad Request
            // Do Something..
        } else if (error.response.status == 500) {
            // 500 Internal Server Error
            // Do Something..
        }

        return Promise.reject(error)
    }
)

export default boot(({ app }) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api

    app.config.globalProperties.$axios = axios
    // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
    //       so you won't necessarily have to import axios in each vue file

    app.config.globalProperties.$api = api
    // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
    //       so you can easily perform requests against your app's API
})

export { api }
