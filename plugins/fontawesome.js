import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPencilRuler,
  faLaptopCode,
  faTachometerFastest,
  faBars,
  faAt,
  faBrowser
} from '@fortawesome/pro-light-svg-icons'
import {
  faFacebook,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faPencilRuler,
  faLaptopCode,
  faTachometerFastest,
  faBars,
  faAt,
  faBrowser,
  faFacebook,
  faLinkedin,
  faGithub
)

Vue.component('fa', FontAwesomeIcon)
