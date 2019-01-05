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
    window.db = pg
    window.sortable = Sortable
    window.modal = window.open('http://localhost:9080/#/ui', 'modal', null, {}, null, false, 900, 80)
    window.modal.$shareStore = {target: 'Artboard'}
    document.body.addEventListener('keydown', (e) => {
      if (e.keyCode === 121) {
        location.href = '#/'
      }
    })
  },
  beforeDestroy () {
    window.modal.close()
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
}
@import 'ui.scss';
</style>