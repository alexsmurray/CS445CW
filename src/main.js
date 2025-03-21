import './style.css'

import { createApp } from 'vue'
import App from './Animation.vue'
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

$(document).ready(function(){
    $('.card').click(function(e){
    e.preventDefault();
    $(this).toggleClass('flipped');
    })
})
