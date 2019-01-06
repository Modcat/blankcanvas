<template>
  <div id="app">
    <art-store />
    <router-view></router-view>
  </div>
</template>

<script>
import pg from 'pg'
import Sortable from 'vue-drag-sortable'
import ArtStore from './components/ArtStore'
export default {
  name: 'blankcanvas',
  components: { ArtStore, pg },
  mounted () {
    console.log(this)
    window.db = pg
    window.sortable = Sortable
    if (!window.modal) {
      window.modal = window.open('http://localhost:9080/#/ui', 'modal', null, {}, null, false, 900, 80)
      window.modal.$shareStore = {target: 'Artboard'}
    }
    document.body.addEventListener('keydown', (e) => {
      if (e.shiftKey && e.keyCode === 32) {
        this.$router.go(-1)
      }
      if (e.ctrlKey && e.keyCode === 32) {
        location.href = '#/'
      }
    })
    document.body.addEventListener('touchmove', this.goBack, false)
    document.body.addEventListener("touchstart", this.goBack, false);
    document.body.addEventListener("touchend", this.goBack, false);
    document.body.addEventListener("touchcancel", this.goBack, false);
  },
  beforeDestroy () {
    window.modal.close()
  },
  methods: {
    goBack(e) {
      console.log('go back app', e)
    }
  }
}
</script>

<style lang="scss">
$orange: rgba(255, 134, 34, 0.3);
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
  background: rgba(255, 255, 255, 0.45);
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