import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // UI for props window
    {
      path: '/properties',
      name: 'Properties',
      component: require('../components/Windows/Properties').default
    },
    {
      path: '/tools',
      name: 'Tools',
      component: require('../components/Windows/Tools').default
    },
    // Editor Environment for inspiration, graphics, presentation, video, audio, spreadsheet, code and database
    {
      path: '/environments',
      name: 'Environments',
      props: { mode: false },
      component: require('../components/Environments/Environments').default
    },
    // Top level document
    {
      path: '/',
      name: 'Artboards',
      component: require('../components/Environments/Artboards').default
    },
    {
      path: '/artflow',
      name: 'Artflow',
      component: require('../components/Environments/ArtFlow').default
    },
    {
      path: '/director',
      name: 'Director',
      component: require('../components/Environments/Director').default
    },
    {
      path: '/artstore',
      name: 'ArtStore',
      component: require('../components/Environments/ArtStore').default
    },
    {
      path: '/bounty',
      name: 'Bounty',
      component: require('../components/Environments/BountyBoard').default
    },
    {
      path: '/hotkeys',
      name: 'HotKeys',
      component: require('../components/Environments/HotKeys').default
    },
    {
      path: '/docs',
      name: 'Docs',
      component: require('../components/Environments/Docs').default
    },
    {
      path: '/volenteer',
      name: 'Volenteer',
      component: require('../components/Environments/Volenteer').default
    },
    // Wild card loader
    {
      path: '*',
      redirect: '/'
    }
  ]
})
