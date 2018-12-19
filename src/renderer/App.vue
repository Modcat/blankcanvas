<template>
  <div id="app">
    <art-store />
    <router-view></router-view>
  </div>
</template>

<script>
import ArtStore from './components/ArtStore'
export default {
  name: 'blankcanvas',
  components: { ArtStore },
  mounted () {
    window.modal = window.open('/static/properties.html', 'modal', null, {}, null, false, 900, 80)
    console.log(window.modal.$shareStore = {target: 'Artboard'})
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
// html,
// body {
//   position: relative;
//   margin: 0;
//   padding: 0;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background: rgba(238, 238, 238, 0.45);
//   font-family: 'Open Sans', sans-serif;
//   font-size: 10px;
//   color: #666;
// }
// // UI

// input[type='text'] {
//   display: block;
//   width: 100%;
//   background: rgba(255, 255, 255, 0.7);
//   box-shadow: 0 1px 5px rgba(0,0,0,0.12);
//   box-sizing: border-box;
//   height: 25px;
//   color: #333;
//   padding: 6px 6px;
//   border: none;
//   border-radius: 2px;
//   margin-top: 10px;
//   margin-right: 10px;
// }

// input[type='text']:last-child {
//   margin-right: 0 !important;
// }

// .search {
//   border-radius: 20px !important;
//   padding-left: 10px !important;
//   padding-right: 10px !important;
// }

// .row {
//   display: flex;
// }

// .row--wrap {
//   flex-wrap: wrap;
//   max-width: 100%;
// }

// select {
//   margin-top: 10px;
//   -webkit-appearance: none;
//   padding: 0 27px 0 10px;
//   line-height: 25px;
//   font-size: 14px;
//   border-radius: 2px;
//   font-size: 10px;
//   border: none;
//   box-shadow: 0 1px 5px rgba(0,0,0,0.12);
//   background: url('data:image/svg+xml;utf8,<svg  xmlns="http://www.w3.org/2000/svg" width="10" height="15"><path d="M5 0 L0 6 L10 6 Z" fill="#444" /><path d="M5 15 L0 9 L10 9 Z" fill="#444" /></svg>') right 10px center no-repeat white;
//   background-size: auto 10px;
// }

// ::-webkit-input-placeholder {
//   text-transform: capitalize;
//   color: #aaa;
// }

// .tabs {
//   display: inline-flex;
//   line-height: 20px;
//   border-radius: 2px;
//   font-weight: bold;
//   font-size: 0.8em;
//   text-transform: uppercase;
//   border: 2px solid rgba(0,0,0,0.15);
//   user-select: none;
// }

// .tabs span {
//   display: block;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   padding: 0 10px;
//   border-right: 2px solid rgba(0,0,0,0.15);
//   background: transparent;
//   transition: background 0.2s, border 0.2s;
// }

// .tabs span.active {
//   background:rgba(0,0,0,0.15);
//   border-color: transparent;
// }

// .tabs span:last-child {
//   border-right: 0;
// }

// button {
//   margin-top: 15px;
//   appearance: none;
//   border-radius: 2px;
//   background: rgba(0,0,0,0.2);
//   border: none;
//   padding: 5px 11px;
//   font-size: 8px;
//   text-transform: uppercase;

//   &:active {
//     background: rgba(0,0,0,0.5);
//   }
// }
</style>

