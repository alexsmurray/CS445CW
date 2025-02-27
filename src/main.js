import './style.css'

import { createApp } from 'vue'
import App from './Gallery.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
const app = createApp(App);
app.use(PrimeVue, {
theme: {
preset: Aura
}
});
app.mount('#app')
app.component('Button', Button);
