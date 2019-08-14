import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPencilRuler,
  faLaptopCode,
  faTachometerFastest,
  faAt,
  faBrowser
} from '@fortawesome/pro-light-svg-icons'
import {
  faFacebook,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faTimes, faBars } from '@fortawesome/pro-solid-svg-icons'

config.autoAddCss = true

library.add(
  faPencilRuler,
  faLaptopCode,
  faTachometerFastest,
  faBars,
  faAt,
  faBrowser,
  faFacebook,
  faLinkedin,
  faGithub,
  faTimes
)

Vue.component('fa', FontAwesomeIcon)
