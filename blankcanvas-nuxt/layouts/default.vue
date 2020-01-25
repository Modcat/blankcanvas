<template>
  <main id="app" class="l-flex-column u-max-viewport">
    <div v-if="$route.name !== 'Tools' && $route.name !== 'Properties'"
      class="c-top-panel">
      <div class="c-tabs">
        <nuxt-link to="/">
          Art boards
        </nuxt-link>
        <nuxt-link to="/artflow">
          Art flow
        </nuxt-link>
        <nuxt-link to="/director">
          Director
        </nuxt-link>
        <nuxt-link to="/artstore">
          Art Store
        </nuxt-link>
        <nuxt-link to="/hotkeys">
          HotKeys
        </nuxt-link>
        <nuxt-link to="/bounty">
          Bounty Board
        </nuxt-link>
        <nuxt-link to="/docs">
          Docs
        </nuxt-link>
        <nuxt-link to="/volenteer">
          volenteer
        </nuxt-link>
        <nuxt-link to="/admin">
          admin
        </nuxt-link>
      </div>
      <button @click="$store.dispatch('displayConsole', true)">_ &lt;</button>
    </div>
      <nuxt class="c-main-content"/>
      <!-- <aside id="main-sidebar">
        <h4>OPEN DOCUMENTS</h4>
        <h4>RECENT DOCUMENTS</h4>
      </aside> -->
    <Console/>
  </main>
</template>

<script>
import Console from '../components/Global/Console'

export default {
  name: 'BlankcanvasDefault',
  components: {
    Console
  }
}
</script>

<style lang="scss">
.c-main-content {
  display: flex;
  overflow: hidden;
  flex-grow: 1;
}
.c-top-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #eee;
  -webkit-app-region: drag;

  * {
    -webkit-app-region: none;
  }
  .c-tabs {
    display: flex;
    border-radius: 3px;
    font-weight: 600;
    a {
      text-decoration: none;
      background: #fff;
      margin-left: 1px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      cursor: default;
      color: inherit;
      display: block;
      padding: 7px 13px 6px 13px;
      font-size: 0.8rem;
      font-weight: bold;
      &:first-child {
        border-radius: 3px 0 0 3px;
      }
      &:last-child {
        border-radius: 0 3px 3px 0;
      }
      &.router-link-exact-active {
        color: #fff;
        background: #aaa;
      }
    }
  }
  button {
    background: white;
    border: none;
    font-size: 0.72rem;
    margin: 0 0 0 10px;
    padding: 9px 13px 8px 13px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 0.8rem;
  }
}
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
@import '../assets/styles/ui.scss';
</style>
