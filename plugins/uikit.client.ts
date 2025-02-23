import { defineNuxtPlugin } from '#app'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

export default defineNuxtPlugin(() => {
  UIkit.use(Icons) // Enable UIkit icons
})
