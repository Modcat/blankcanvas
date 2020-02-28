<template>
  <main id="app" class="l-flex-column u-max-viewport">
    <Header/>
    <nuxt class="c-main-content"/>
    <Terminal v-if="$store.state.console.displayConsole"/>
  </main>
</template>

<script>
import Header from '../components/global/Header'
import Terminal from '../components/global/Terminal'

export default {
  name: 'BlankcanvasDefault',
  components: {
    Header,
    Terminal
  },
  methods: {
    showAlert() { alert('hello world') }
  }
}
</script>

<style lang="scss">
.c-main-content {
  display: flex;
  overflow: hidden;
  flex-grow: 1;
}
// .c-top-panel {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 15px;
//   background: #eee;
//   -webkit-app-region: drag;
//   box-shadow: 0px 0px 6px rgba(0,0,0,0.25);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.13);
//   z-index: 99;

//   * {
//     -webkit-app-region: none;
//   }
//   .c-tabs {
//     display: flex;
//     border-radius: 3px;
//     font-weight: 600;
//     a {
//       text-decoration: none;
//       background: #fff;
//       margin-left: 1px;
//       border: none;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       text-transform: uppercase;
//       cursor: default;
//       color: inherit;
//       display: block;
//       padding: 7px 13px 6px 13px;
//       font-size: 0.8rem;
//       font-weight: bold;
//       &:first-child {
//         border-radius: 3px 0 0 3px;
//       }
//       &:last-child {
//         border-radius: 0 3px 3px 0;
//       }
//       &.router-link-exact-active {
//         color: #fff;
//         background: #aaa;
//       }
//     }
//   }
//   button {
//     background: white;
//     border: none;
//     font-size: 0.72rem;
//     margin: 0 0 0 10px;
//     padding: 9px 13px 8px 13px;
//     text-transform: uppercase;
//     font-weight: 600;
//     line-height: 0.8rem;
//   }
// }
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
#wrapper {
	display: flex;
	flex-direction: column;
	padding: 15px;
	align-items: center;

	> * {
		margin-top: 15px;
	}
	> *:first-child {
		margin-top: 0px;
	}
}
</style>
