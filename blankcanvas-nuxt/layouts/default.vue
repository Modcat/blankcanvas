<template>
  <div id="app">
    <div v-if="$route.name !== 'Tools' && $route.name !== 'Properties'"
      class="top-panel">
      <div class="tabs">
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
    <div class="row">
      <aside id="main-sidebar">
        <h4>OPEN DOCUMENTS</h4>
        <h4>RECENT DOCUMENTS</h4>
      </aside>
      <nuxt/>
    </div>
    <Console/>
  </div>
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
$orange: rgba(255, 134, 34, 0.3);
html,
body {
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // background: rgba(255, 255, 255, 0.45);
  background: #fff;
  color: #666;
  overflow: hidden;
  font-family: 'opensans';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
}
.row {
  display: flex;
  max-height: calc(100vh - 252px);
}
.top-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #eee;
  -webkit-app-region: drag;

  * {
    -webkit-app-region: none;
  }
  .tabs {
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
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
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
