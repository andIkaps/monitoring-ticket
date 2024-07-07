import { boot } from 'quasar/wrappers'
import BaseIcon from '../components/common/BaseIcon.vue'

export default boot(async ({ app }) => {
    app.component('BaseIcon', BaseIcon)
})
