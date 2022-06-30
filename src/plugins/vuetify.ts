// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Vuetify
import { createVuetify } from 'vuetify'


export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  { 
    theme: { defaultTheme: 'dark' },
    icons: { defaultSet: 'mdi', aliases, sets: { mdi } }
  }
)
