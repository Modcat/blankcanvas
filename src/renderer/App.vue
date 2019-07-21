<template>
  <div id="app">
    <div
      v-if="$route.name !== 'Tools' && $route.name !== 'Properties'"
      class="top-panel"
    >
      <div class="tabs">
        <router-link to="/">
          Art boards
        </router-link>
        <router-link to="/artflow">
          Art flow
        </router-link>
        <router-link to="/director">
          Director
        </router-link>
        <router-link to="/artstore">
          Art Store
        </router-link>
        <router-link to="/hotkeys">
          HotKeys
        </router-link>
        <router-link to="/bounty">
          Bounty Board
        </router-link>
        <router-link to="/docs">
          Docs
        </router-link>
        <router-link to="/volenteer">
          volenteer
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
import Sortable from 'vue-drag-sortable'

export default {
  name: 'Blankcanvas',
  mounted () {

    console.log(this)
    
    // Get remote windows
    let electron = require('electron')
    let mainWindow = electron.remote.app.mainWindow
    let tools = electron.remote.app.tools
    let properties = electron.remote.app.properties
    
    // Make stuff sortable
    window.sortable = Sortable
    document.body.addEventListener('keydown', (e) => {
      if (e.shiftKey && e.keyCode === 32) {
        this.$router.go(-1)
      }
      if (e.ctrlKey && e.keyCode === 32) {
        location.href = '#/'
      }
    })
  }
}
</script>

<style lang="scss">
$orange: rgba(255, 134, 34, 0.3);
.top-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #eee;
  -webkit-app-region: drag;
  .tabs {
    border-radius: 3px;
    // box-shadow: 0px 2px 6px #ccc;
    font-weight: 600;
    a {
      padding: 0 15px;
      display: inline-block;
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
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  color: #666;
  overflow: hidden;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar:vertical {
  height: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
}
@import 'ui.scss';
</style>