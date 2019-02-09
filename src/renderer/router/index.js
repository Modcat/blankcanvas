import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // UI for props window
    {
      path: '/properties',
      name: 'Properties',
      component: require('@/components/Windows/Properties').default
    },
    {
      path: '/tools',
      name: 'Tools',
      component: require('@/components/Windows/Tools').default
    },
    // Top level document
    {
      path: '/',
      name: 'artboards',
      component: require('@/components/Environments/Artboards').default
    },
    {
      path: '/artflow',
      name: 'Artflow',
      component: require('@/components/Environments/ArtFlow').default
    },
    {
      path: '/artstore',
      name: 'ArtStore',
      component: require('@/components/Environments/ArtStore').default
    },
    {
      path: '/bounty',
      name: 'Bounty',
      component: require('@/components/Environments/BountyBoard').default
    },
    // Editor Environment for inspiration, graphics, presentation, video, audio, spreadsheet, code and database
    {
      path: '/environments',
      name: 'Environments',
      component: require('@/components/Environments/Environments').default
    },
    //Hotkeys Module.
    {
      path: '/hotkeys',
      name: 'HotKeys',
      component: require('@/components/Environments/HotKeys').default
    },

    // Wild card loader
    {
      path: '*',
      redirect: '/'
    }
    // Useless but copy code out
    // {
    //   path: '/3dvr',
    //   name: '3dvr',
    //   component: require('@/components/Environments/ThreeDVr').default
    // },
    // {
    //   path: '/3dar',
    //   name: '3dar',
    //   component: require('@/components/Environments/ThreeDAr').default
    // },
    // {
    //   path: '/web',
    //   name: 'WebView',
    //   component: require('@/components/Environments/WebView').default
    // }
  ]
})
