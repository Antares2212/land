import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/fonts.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiArrowUpRight, BiStarFill, BiSearch, BiArrowLeftSquare, BiArrowRightSquare, HiRefresh } from "oh-vue-icons/icons";

addIcons(BiArrowUpRight, BiStarFill, BiSearch, BiArrowLeftSquare, BiArrowRightSquare, HiRefresh)

createApp(App)
.component("v-icon", OhVueIcon)
.mount('#app')
