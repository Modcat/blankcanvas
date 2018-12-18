import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'artboards',
      component: require('@/components/Environments/Artboards').default
    },
    {
      path: '/Audio',
      name: 'audio',
      component: require('@/components/Environments/Audio').default
    },
    {
      path: '/codeeditor',
      name: 'CodeEditor',
      component: require('@/components/Environments/CodeEditor').default
    },
    {
      path: '/database',
      name: 'Database',
      component: require('@/components/Environments/Database').default
    },
    {
      path: '/excel',
      name: 'Excel',
      component: require('@/components/Environments/Excel').default
    },
    {
      path: '/graphics',
      name: 'Graphics',
      component: require('@/components/Environments/Graphics').default
    },
    {
      path: '/powerpoint',
      name: 'PowerPoint',
      component: require('@/components/Environments/PowerPoint').default
    },
    {
      path: '/preferences',
      name: 'Preferences',
      component: require('@/components/Environments/Preferences').default
    },
    {
      path: '/video',
      name: 'Video',
      component: require('@/components/Environments/Video').default
    },
    {
      path: '/bounty',
      name: 'Bounty',
      component: require('@/components/Environments/BountyBoard').default
    },
    {
      path: '/3dvr',
      name: '3dvr',
      component: require('@/components/Environments/ThreeDVr').default
    },
    {
      path: '/3dar',
      name: '3dar',
      component: require('@/components/Environments/ThreeDAr').default
    },
    {
      path: '/web',
      name: 'WebView',
      component: require('@/components/Environments/WebView').default
    },
    {
      path: '/artflow',
      name: 'Artflow',
      component: require('@/components/Environments/Artflow').default
    },
    {
      path: '/ui',
      name: 'ui',
      component: require('@/components/Ui').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
