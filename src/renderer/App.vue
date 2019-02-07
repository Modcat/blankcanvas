<template>
  <div id="app">
    <div v-if="$route.name !== 'Tools' && $route.name !== 'ui'" class="top-panel">
      <div class="tabs">
        <span class="active" @click="openArtboards">Art boards</span>
        <span @click="openArtflow">Art flow</span>
        <span>Director</span>
        <span @click="openArtstore">Art Store</span>
        <span @click="openHotkeys">HotKeys</span>
        <span @click="openBountyBoard">Bounty Board</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import pg from 'pg'
import Sortable from 'vue-drag-sortable'
import ArtStore from './components/Environments/ArtStore'
export default {
  name: 'blankcanvas',
  components: { ArtStore, pg },
  mounted () {
    window.electron = require('electron')
    window.elecWindows = electron.remote.getGlobal('windowAccess')
    window.db = pg
    window.sortable = Sortable
    document.body.addEventListener('keydown', (e) => {
      if (e.shiftKey && e.keyCode === 32) {
        this.$router.go(-1)
      }
      if (e.ctrlKey && e.keyCode === 32) {
        location.href = '#/'
      }
    })
  },
  beforeDestroy () {
    window.modal.close()
  },
  methods: {
    goBack(e) {
      console.log('go back app', e)
    },
    openArtboards() {
      window.location.href = '#/artboards'
    },
    openArtflow() {
      window.location.href = '#/artflow'
    },
    openArtstore() {
      window.location.href = '#/artstore'
    },
    openHotkeys() {
      window.location.href = '#/hotkeys'
    },
    openBountyBoard() {
      window.location.href = '#/bounty'
    }
  }
}
</script>

<style lang="scss">
$orange: rgba(255, 134, 34, 0.3);
.top-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #dadada;
  -webkit-app-region: drag;
  .tabs {
    border-radius: 3px;
    box-shadow: 0px 2px 6px #ccc;
    font-weight: 600;
    span {
      background: #eee;
      margin-left: 1px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      cursor: default;
      &.active {
        color: #fff;
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
  background: #eee;
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