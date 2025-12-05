import Alpine from 'alpinejs'
import { collapse } from '@alpinejs/collapse'
import AOS from 'aos'

AOS.init({
  once: true,
})

Alpine.plugin(collapse)
window.Alpine = Alpine
Alpine.start()
